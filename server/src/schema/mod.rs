use async_graphql::{Context, EmptyMutation, EmptySubscription, Object, Result, Schema};

use crate::features::users::{resolver::UserResolver, schema::User};

pub struct Query;

#[Object]
impl Query {
    // Mock schema for now. TODO: Create real schema.
    async fn user(&self, ctx: &Context<'_>) -> Result<User> {
        UserResolver {}.user(ctx).await
    }
}

pub type AppSchema = Schema<Query, EmptyMutation, EmptySubscription>;
