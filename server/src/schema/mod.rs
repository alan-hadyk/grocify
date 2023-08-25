use crate::features::users::{enums::PreferredLang, resolver::UserResolver, schema::User};
use async_graphql::{Context, EmptySubscription, Object, Result, Schema};
use sqlx::types::Uuid;

pub struct Mutation {
    pub user_resolver: UserResolver,
}

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
        self.user_resolver
            .create_user(ctx, username, password, email, preferred_language)
            .await
    }
}

pub struct Query {
    pub user_resolver: UserResolver,
}

#[Object]
impl Query {
    async fn user(
        &self,
        ctx: &Context<'_>,
        id: Option<Uuid>,
        username: Option<String>,
    ) -> Result<User> {
        self.user_resolver.user(ctx, id, username).await
    }
}

pub type AppSchema = Schema<Query, Mutation, EmptySubscription>;

#[cfg(test)]
mod tests;
