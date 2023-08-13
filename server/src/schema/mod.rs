use async_graphql::{EmptyMutation, EmptySubscription, Object, Schema};
use sqlx::{Pool, Postgres};

use self::schema_context::SchemaContext;

use crate::features::feature_a::resolvers::{FeatureA, FeatureAResolver};

pub mod schema_context;

pub struct Query;

#[Object]
impl Query {
    // Mock schema for now. TODO: Create real schema.
    async fn feature_a<'a>(
        &'a self,
        ctx: &'a async_graphql::Context<'_>,
    ) -> async_graphql::Result<FeatureA> {
        let resolver = FeatureAResolver {};

        resolver.feature_a(ctx).await
    }
}

pub type AppSchema = Schema<Query, EmptyMutation, EmptySubscription>;

// Create the schema
pub fn create_schema(db_pool: Pool<Postgres>) -> AppSchema {
    let schema_context = SchemaContext::new(db_pool);

    Schema::build(Query, EmptyMutation, EmptySubscription)
        .data(schema_context)
        .finish()
}
