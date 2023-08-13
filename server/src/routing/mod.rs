use async_redis_session::RedisSessionStore;
use axum::{
    extract::Extension,
    routing::{get, post},
    Router,
};
use axum_sessions::SessionLayer;
use sqlx::{Pool, Postgres};

mod handlers;
mod helpers;
mod paths;

use paths::Path;

use crate::schema;

// Create router with routes
pub fn create_router(
    db_pool: Pool<Postgres>,
    session_layer: SessionLayer<RedisSessionStore>,
) -> Router {
    // Schema
    let schema = schema::create_schema::create_schema(db_pool);

    Router::new()
        .route(Path::ROOT, get(handlers::get_root_handler))
        .route(Path::GRAPHQL, post(handlers::post_graphql_handler))
        .layer(session_layer)
        .layer(Extension(schema))
}
