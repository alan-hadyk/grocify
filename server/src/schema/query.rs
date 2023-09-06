use crate::features::users::{resolver::UserResolver, schema::User};
use async_graphql::{Context, Object, Result};
use sqlx::types::Uuid;

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
