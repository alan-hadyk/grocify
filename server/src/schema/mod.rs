use async_graphql::{EmptyMutation, EmptySubscription, Object, Schema};

use crate::features::feature_a::{resolvers::FeatureAResolver, schema::FeatureA};

pub mod create_schema;
pub mod schema_context;
pub mod session_user_id;

pub struct Query;

#[Object]
impl Query {
    // Mock schema for now. TODO: Create real schema.
    async fn feature_a(&self, ctx: &async_graphql::Context<'_>) -> async_graphql::Result<FeatureA> {
        let resolver = FeatureAResolver {};

        resolver.feature_a(ctx).await
    }
}

pub type AppSchema = Schema<Query, EmptyMutation, EmptySubscription>;
