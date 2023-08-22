use super::{enums::PreferredLanguage, schema::User};
use crate::services::schema_service::SchemaService;
use async_graphql::{Context, Object, Result};
use axum_sessions::async_session::chrono::{self, NaiveDate, Utc};
use sqlx::types::Uuid;

pub struct UserResolver {}

#[Object]
impl UserResolver {
    pub async fn user(&self, ctx: &Context<'_>) -> Result<User> {
        let schema_context = SchemaService::get_schema_context(ctx)?;
        let session_user_id = SchemaService::get_session_user_id(ctx);

        if let Some(session_user_id) = session_user_id {
            tracing::info!("session_user_id: {:#?}", session_user_id);
        } else {
            tracing::warn!("No user_id in context");
        }

        Ok(User {
            id: Uuid::new_v4(),
            username: "Johnny".to_string(),
            password_hash: "2342234234234234".to_string(),
            email: "john@gmail.com".to_string(),
            preferred_language: PreferredLanguage::Pl,
            created_at: chrono::DateTime::<Utc>::from_utc(
                NaiveDate::from_ymd_opt(2023, 8, 22)
                    .unwrap()
                    .and_hms_opt(2, 0, 0)
                    .unwrap(),
                Utc,
            ),
        })
    }
}
