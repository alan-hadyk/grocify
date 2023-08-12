use ::redis::aio::Connection;
use axum::{
    extract::Extension,
    routing::{get, post},
    Router,
};
use sqlx::{Pool, Postgres};

use crate::schema;

mod handlers;
mod paths;

use paths::Path;

// Create router with routes
pub fn create_router(db_pool: Pool<Postgres>, redis_connection: Connection) -> Router {
    // Schema
    let schema = schema::create_schema(db_pool, redis_connection);

    Router::new()
        .route(Path::ROOT, get(handlers::get_root_handler))
        .route(Path::GRAPHQL, post(handlers::post_graphql_handler))
        .layer(Extension(schema))
}
