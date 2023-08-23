use crate::features::users::{enums::PreferredLang, resolver::UserResolver, schema::User};
use async_graphql::{Context, EmptySubscription, Object, Result, Schema};
use sqlx::types::Uuid;

pub struct Mutation;

#[Object]
impl Mutation {
    async fn create_user(
        &self,
        ctx: &Context<'_>,
        username: String,
        password: String,
        email: String,
        preferred_language: PreferredLang,
    ) -> Result<User> {
        UserResolver {}
            .create_user(ctx, username, password, email, preferred_language)
            .await
    }
}

pub struct Query;

#[Object]
impl Query {
    async fn user(
        &self,
        ctx: &Context<'_>,
        id: Option<Uuid>,
        username: Option<String>,
    ) -> Result<User> {
        UserResolver {}.user(ctx, id, username).await
    }
}

pub type AppSchema = Schema<Query, Mutation, EmptySubscription>;
