use async_graphql::http::GraphiQLSource;
use async_graphql_axum::{GraphQLRequest, GraphQLResponse};
use axum::{
    response::{self, IntoResponse},
    Extension,
};

use crate::{router::Path, schema::AppSchema};

// GraphQL handler for schema
pub async fn graphql_handler(schema: Extension<AppSchema>, req: GraphQLRequest) -> GraphQLResponse {
    schema.execute(req.into_inner()).await.into()
}

//
pub async fn graphiql() -> impl IntoResponse {
    response::Html(GraphiQLSource::build().endpoint(Path::GRAPHQL).finish())
}
