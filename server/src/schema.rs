use ::redis::aio::Connection;
use async_graphql::{EmptyMutation, EmptySubscription, Object, Schema};
use sqlx::{Pool, Postgres};

pub struct SchemaContext {
    pub db_pool: Pool<Postgres>,
    pub redis_connection: Connection,
}

impl SchemaContext {
    pub fn new(db_pool: Pool<Postgres>, redis_connection: Connection) -> Self {
        Self {
            db_pool,
            redis_connection,
        }
    }
}

pub struct Query;

#[Object]
impl Query {
    // Mock schema for now. TODO: Create real schema.
    async fn value(&self, ctx: &async_graphql::Context<'_>) -> i32 {
        // Access the custom context
        let schema_context = ctx.data::<SchemaContext>().unwrap();
        let db_pool = &schema_context.db_pool;
        let redis_connection = &schema_context.redis_connection;

        100
    }
}

pub type AppSchema = Schema<Query, EmptyMutation, EmptySubscription>;

// Create the schema
pub fn create_schema(db_pool: Pool<Postgres>, redis_connection: Connection) -> AppSchema {
    let schema_context = SchemaContext::new(db_pool, redis_connection);

    Schema::build(Query, EmptyMutation, EmptySubscription)
        .data(schema_context)
        .finish()
}
