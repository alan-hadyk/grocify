use super::enums::PreferredLanguage;
use async_graphql::Object;
use axum_sessions::async_session::chrono::{self, Utc};
use sqlx::types::Uuid;

pub struct User {
    pub id: Uuid,
    pub username: String,
    pub password_hash: String,
    pub email: String,
    pub preferred_language: PreferredLanguage,
    pub created_at: chrono::DateTime<Utc>,
}

#[Object]
impl User {
    async fn id(&self) -> String {
        self.id.to_string()
    }

    async fn username(&self) -> String {
        self.username.to_string()
    }

    async fn email(&self) -> String {
        self.email.to_string()
    }

    async fn preferred_language(&self) -> String {
        self.preferred_language.to_string().to_lowercase()
    }

    async fn created_at(&self) -> String {
        self.created_at.format("%Y-%m-%dT%H:%M:%S%.3fZ").to_string()
    }
}
