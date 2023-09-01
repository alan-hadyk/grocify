use super::{enums::PreferredLang, model::UserModel, schema::User};
use crate::{clients::db_pool::get_db_pool, services::schema_service::SchemaService};
use async_graphql::{Context, Error, Object, Result};
use lazy_static::lazy_static;
use sqlx::types::Uuid;
use tokio::sync::OnceCell;

#[derive(Clone)]
pub struct UserResolver {
    pub user_model: UserModel,
}

#[Object]
impl UserResolver {
    pub async fn create_user(
        &self,
        username: String,
        password: String,
        email: String,
        preferred_language: PreferredLang,
    ) -> Result<User, Error> {
        let user = self
            .user_model
            .create(username, password, email, preferred_language)
            .await;

        match user {
            Ok(user) => Ok(user),
            Err(err) => {
                tracing::error!("{:#?}", err);
                Err(Error::new(format!("{}", err)))
            }
        }
    }

    pub async fn user(
        &self,
        ctx: &Context<'_>,
        id: Option<Uuid>,
        username: Option<String>,
    ) -> Result<User, Error> {
        let session_user_id = SchemaService::get_session_user_id(ctx);

        if session_user_id.is_none() {
            return Err(Error::new("Not allowed"));
        };

        let user = self.user_model.get_by(id, username).await;

        match user {
            Ok(user) => Ok(user),
            Err(err) => {
                tracing::error!("{:#?}", err);
                Err(Error::new(format!("{}", err)))
            }
        }
    }
}

lazy_static! {
    static ref USER_RESOLVER: OnceCell<UserResolver> = OnceCell::const_new();
}

pub async fn create_user_resolver() -> UserResolver {
    let db_pool_arc = get_db_pool().await;

    UserResolver {
        user_model: UserModel {
            db_pool: db_pool_arc.clone(),
        },
    }
}
