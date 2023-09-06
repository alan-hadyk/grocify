use crate::{config::get_config, helpers::redis_keys::RedisKey};
use async_graphql::ServerError;
use async_redis_session::{self, RedisSessionStore};
use axum_sessions::{extractors::WritableSession, SessionLayer};
use serde_json::Value;

pub struct SessionService;

impl SessionService {
    pub async fn create_session_layer() -> SessionLayer<RedisSessionStore> {
        let config = get_config();
        let redis_url = config.redis_url.as_str();

        let store = match RedisSessionStore::new(redis_url) {
            Ok(memory_store) => {
                tracing::info!("Redis is available as session memory store");

                memory_store
            }
            Err(err) => {
                // Log the error
                tracing::error!(
                    "Failed to make the Redis client available as session memory store: {}",
                    err
                );
                // Handle the error by exiting the program
                panic!(
                    "Failed to make the Redis client available as session memory store: {}",
                    err
                );
            }
        };

        let session_layer = SessionLayer::new(store, &config.secret).with_secure(false);

        session_layer
    }

    pub fn insert_user_id_into_session(
        query_json: &Value,
        session: &mut WritableSession,
    ) -> Result<(), ServerError> {
        if let Some(create_user_data) = query_json.get("createUser").and_then(Value::as_object) {
            if let Some(id) = create_user_data.get("id").and_then(Value::as_str) {
                return session
                    .insert(RedisKey::USER_ID, id.to_string())
                    .map_err(|err| {
                        tracing::error!("Failed to add user_id to session: {:#?}", err);
                        ServerError::new(format!("Internal Server Error"), None)
                    });
            };
        }

        Ok(())
    }
}
