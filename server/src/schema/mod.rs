use async_graphql::{Context, EmptyMutation, EmptySubscription, Object, Result, Schema};

use crate::features::feature_a::{resolvers::FeatureAResolver, schema::FeatureA};

pub struct Query;

#[Object]
impl Query {
    // Mock schema for now. TODO: Create real schema.
    async fn feature_a(&self, ctx: &Context<'_>) -> Result<FeatureA> {
        FeatureAResolver {}.feature_a(ctx).await
    }
}

pub type AppSchema = Schema<Query, EmptyMutation, EmptySubscription>;
