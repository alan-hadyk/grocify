use axum::{
    extract::Extension,
    routing::{get, post},
    Router,
};

use crate::schema;

mod handlers;
mod paths;

// Create router with routes
pub fn create_router() -> Router {
    // Schema
    let schema = schema::create_schema();

    Router::new()
        .route(paths::Path::ROOT, get(handlers::get_root_handler))
        .route(paths::Path::GRAPHQL, post(handlers::post_graphql_handler))
        .layer(Extension(schema))
}
