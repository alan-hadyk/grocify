use sqlx::{Pool, Postgres};

pub struct SchemaContext {
    pub db_pool: Pool<Postgres>,
}

impl SchemaContext {
    pub fn new(db_pool: Pool<Postgres>) -> Self {
        Self { db_pool }
    }
}

pub type Ctx<'a> = async_graphql::Context<'a>;

pub fn get_schema_context<'a>(ctx: &'a Ctx) -> &'a SchemaContext {
    // Access the custom context
    match ctx.data::<SchemaContext>() {
        Ok(schema_ctx) => schema_ctx,
        Err(err) => {
            tracing::error!("Failed to retrieve schema context: {:#?}", err);
            std::process::exit(1);
        }
    }
}
