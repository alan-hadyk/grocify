use axum::{
    extract::Extension,
    routing::{get, post},
    Router,
};

use crate::schema;

mod handlers;
mod paths;

use paths::Path;

// Create router with routes
pub fn create_router() -> Router {
    // Schema
    let schema = schema::create_schema();

    Router::new()
        .route(Path::ROOT, get(handlers::get_root_handler))
        .route(Path::GRAPHQL, post(handlers::post_graphql_handler))
        .layer(Extension(schema))
}
