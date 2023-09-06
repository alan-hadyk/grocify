use super::enums::PreferredLang;
use crate::helpers::date_format::DateFormat;
use async_graphql::Object;
use chrono::{DateTime, Utc};
use sqlx::{types::Uuid, FromRow};

#[derive(Debug, FromRow)]
pub struct User {
    pub id: Uuid,
    pub username: String,
    pub password_hash: String,
    pub email: String,
    pub preferred_language: PreferredLang,
    pub created_at: DateTime<Utc>,
}

#[Object]
impl User {
    async fn id(&self) -> Uuid {
        self.id
    }

    async fn username(&self) -> String {
        self.username.to_string()
    }

    async fn email(&self) -> String {
        self.email.to_string()
    }

    async fn preferred_language(&self) -> PreferredLang {
        self.preferred_language
    }

    async fn created_at(&self) -> String {
        self.created_at.format(DateFormat::ISO_8601).to_string()
    }
}
