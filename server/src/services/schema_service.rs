use super::routing_service::UserId;
use crate::{
    features::users::resolver::create_user_resolver,
    schema::{mutation::Mutation, query::Query, AppSchema},
};
use async_graphql::{Context, EmptySubscription, Schema};

pub struct SchemaService;

impl SchemaService {
    pub fn get_session_user_id<'lifetime>(
        ctx: &'lifetime Context<'_>,
    ) -> Option<&'lifetime UserId> {
        let session_user_id = ctx.data_opt::<UserId>();

        session_user_id
    }

    pub async fn create_schema() -> AppSchema {
        let user_resolver = create_user_resolver().await;

        let query = Query {
            user_resolver: user_resolver.clone(),
        };
        let mutation = Mutation {
            user_resolver: user_resolver.clone(),
        };

        Schema::build(query, mutation, EmptySubscription).finish()
    }
}
