use axum::{
    extract::Extension,
    routing::{get, post},
    Router,
};

use crate::{handlers, schema};

// use crate::{handlers, schema};

#[non_exhaustive]
pub struct Path;

impl Path {
    pub const ROOT: &str = "/";
    pub const GRAPHQL: &str = "/graphql";
}

// Create router with routes
pub fn create_router() -> Router {
    // Initialize schema
    let schema = schema::create_schema();

    let router = Router::new()
        .route(Path::ROOT, get(handlers::graphiql))
        .route(Path::GRAPHQL, post(handlers::graphql_handler))
        .layer(Extension(schema));

    router
}
