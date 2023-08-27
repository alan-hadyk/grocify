use super::routing_service::UserId;
use crate::{
    features::users::resolver::UserResolver,
    schema::{mutation::Mutation, query::Query, AppSchema},
};
use async_graphql::{Context, EmptySubscription, Schema, ServerError};
use sqlx::{Pool, Postgres};

pub struct SchemaService;

pub struct SchemaContext {
    pub db_pool: Pool<Postgres>,
}

impl SchemaService {
    pub fn get_schema_context<'lifetime>(
        ctx: &'lifetime Context<'_>,
    ) -> Result<&'lifetime SchemaContext, ServerError> {
        // Access the custom context
        ctx.data::<SchemaContext>().map_err(|err| {
            tracing::error!("Failed to retrieve schema context: {:#?}", err);
            ServerError::new("Internal Server Error", None)
        })
    }

    pub fn get_session_user_id<'lifetime>(
        ctx: &'lifetime Context<'_>,
    ) -> Option<&'lifetime UserId> {
        let session_user_id = ctx.data_opt::<UserId>();

        session_user_id
    }

    pub fn create_schema(db_pool: Pool<Postgres>) -> AppSchema {
        let schema_context = SchemaContext { db_pool };
        let query = Query {
            user_resolver: UserResolver {},
        };
        let mutation = Mutation {
            user_resolver: UserResolver {},
        };

        Schema::build(query, mutation, EmptySubscription)
            .data(schema_context)
            .finish()
    }
}
