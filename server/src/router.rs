use axum::{
    extract::Extension,
    routing::{get, post},
    Router,
};

use crate::{handlers, schema};

pub fn create_router() -> Router {
    // Initialize schema
    let schema = schema::create_schema();

    let router = Router::new()
        .route("/", get(handlers::graphiql))
        .route("/graphql", post(handlers::graphql_handler))
        .layer(Extension(schema));

    router
}
