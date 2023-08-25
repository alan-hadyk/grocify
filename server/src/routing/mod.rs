use self::handlers::{get_root_handler, post_graphql_handler};
use crate::services::{schema_service::SchemaService, session_service::SessionService};
use axum::{
    extract::Extension,
    routing::{get, post},
    Router,
};
use paths::Path;
use sqlx::{Pool, Postgres};

mod handlers;
mod paths;

// Create router with routes
pub async fn create_router(db_pool: Pool<Postgres>) -> Router {
    // Schema
    let schema = SchemaService::create_schema(db_pool);

    // Session layer
    let session_layer = SessionService::create_session_layer().await;

    Router::new()
        .route(Path::ROOT, get(get_root_handler))
        .route(Path::GRAPHQL, post(post_graphql_handler))
        .layer(session_layer)
        .layer(Extension(schema))
}

#[cfg(test)]
mod tests;
