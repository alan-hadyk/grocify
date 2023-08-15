use crate::schema::{AppSchema, Query};
use async_graphql::{Context, EmptyMutation, EmptySubscription, Schema, ServerError};
use sqlx::{Pool, Postgres};

pub struct SchemaService {}

pub struct SchemaContext {
    pub db_pool: Pool<Postgres>,
}

impl SchemaService {
    pub fn get_schema_context<'a>(ctx: &'a Context<'_>) -> Result<&'a SchemaContext, ServerError> {
        // Access the custom context
        ctx.data::<SchemaContext>().map_err(|err| {
            tracing::error!("Failed to retrieve schema context: {:#?}", err);
            ServerError::new("Internal Server Error", None)
        })
    }

    pub fn get_session_user_id<'a>(ctx: &'a Context<'_>) -> Option<&'a String> {
        let session_user_id = ctx.data_opt::<String>();

        session_user_id
    }

    pub fn create_schema(db_pool: Pool<Postgres>) -> AppSchema {
        let schema_context = SchemaContext { db_pool };

        Schema::build(Query, EmptyMutation, EmptySubscription)
            .data(schema_context)
            .finish()
    }
}
