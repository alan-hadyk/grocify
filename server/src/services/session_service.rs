use crate::config;
use async_redis_session::{self, RedisSessionStore};
use axum_sessions::SessionLayer;

pub struct SessionService {
    pub session_layer: SessionLayer<RedisSessionStore>,
}

impl SessionService {
    pub async fn new() -> Self {
        let config = config::get_config();
        let redis_url = config.redis_url.as_str();

        let store = match async_redis_session::RedisSessionStore::new(redis_url) {
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
                std::process::exit(1);
            }
        };

        let session_layer = SessionLayer::new(store, &config.secret);

        SessionService { session_layer }
    }
}
