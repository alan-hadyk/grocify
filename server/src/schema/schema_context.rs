use sqlx::{Pool, Postgres};

pub struct SchemaContext {
    pub db_pool: Pool<Postgres>,
    pub user_id: Option<String>,
}

impl SchemaContext {
    pub fn new(db_pool: Pool<Postgres>) -> Self {
        Self {
            db_pool,
            user_id: None,
        }
    }
}

pub fn get_schema_context<'a>(ctx: &'a async_graphql::Context<'_>) -> &'a SchemaContext {
    // Access the custom context
    match ctx.data::<SchemaContext>() {
        Ok(schema_ctx) => schema_ctx,
        Err(err) => {
            tracing::error!("Failed to retrieve schema context: {:#?}", err);
            std::process::exit(1);
        }
    }
}
