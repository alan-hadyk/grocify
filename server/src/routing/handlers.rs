use async_graphql::http::GraphiQLSource;
use async_graphql_axum::{GraphQLRequest, GraphQLResponse};
use axum::{
    response::{self, IntoResponse},
    Extension,
};

use crate::{routing, schema};

// Expose GraphQL IDE in browser - `GET /`
pub async fn get_root_handler() -> impl IntoResponse {
    response::Html(
        GraphiQLSource::build()
            .endpoint(routing::paths::Path::GRAPHQL)
            .finish(),
    )
}

// GraphQL handler for schema - `POST /graphql`
pub async fn post_graphql_handler(
    schema: Extension<schema::AppSchema>,
    req: GraphQLRequest,
) -> GraphQLResponse {
    schema.execute(req.into_inner()).await.into()
}
