use async_graphql::http::GraphiQLSource;
use async_graphql_axum::{GraphQLRequest, GraphQLResponse};
use axum::{
    response::{self, IntoResponse},
    Extension,
};
use axum_sessions::extractors::WritableSession;

use crate::{
    routing,
    schema::{self},
};

use super::helpers::{
    append_user_id_to_request_data, convert_schema_data_to_json, insert_user_id_into_session,
};

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
    mut session: WritableSession,
    req: GraphQLRequest,
) -> GraphQLResponse {
    let user_id = session.get::<String>("user_id");
    let mut request = req.into_inner();

    // Append user_id to request data
    append_user_id_to_request_data(&mut request, user_id);

    // Execute the query and get the result.
    let mut schema_result = schema.execute(request).await;

    // Convert the response data to JSON.
    let query_json = convert_schema_data_to_json(&mut schema_result);

    // Insert user id into session if needed
    insert_user_id_into_session(&query_json, &mut session);

    schema_result.into()
}
