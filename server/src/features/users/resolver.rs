use super::{enums::PreferredLang, model::UserModel, schema::User};
use crate::services::schema_service::SchemaService;
use async_graphql::{Context, Error, Object, Result};
use sqlx::types::Uuid;

pub struct UserResolver;

#[Object]
impl UserResolver {
    pub async fn create_user(
        &self,
        ctx: &Context<'_>,
        username: String,
        password: String,
        email: String,
        preferred_language: PreferredLang,
    ) -> Result<User, Error> {
        let schema_context = SchemaService::get_schema_context(ctx)?;
        let db_pool = &schema_context.db_pool;
        let user_model = UserModel { db_pool };

        let user = user_model
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

        let schema_context = SchemaService::get_schema_context(ctx)?;
        let db_pool = &schema_context.db_pool;
        let user_model = UserModel { db_pool };

        let user = user_model.get_by(id, username).await;

        match user {
            Ok(user) => Ok(user),
            Err(err) => {
                tracing::error!("{:#?}", err);
                Err(Error::new(format!("{}", err)))
            }
        }
    }
}
