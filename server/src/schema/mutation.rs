use crate::features::users::{enums::PreferredLang, resolver::UserResolver, schema::User};
use async_graphql::{Context, Object, Result};

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
