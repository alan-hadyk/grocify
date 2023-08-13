use async_graphql::{EmptyMutation, EmptySubscription, Schema};
use sqlx::{Pool, Postgres};

use super::{schema_context::SchemaContext, AppSchema, Query};

// Create the schema
pub fn create_schema(db_pool: Pool<Postgres>) -> AppSchema {
    let schema_context = SchemaContext::new(db_pool);

    Schema::build(Query, EmptyMutation, EmptySubscription)
        .data(schema_context)
        .finish()
}
