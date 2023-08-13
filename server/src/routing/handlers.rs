use async_graphql::{http::GraphiQLSource, ServerError};
use async_graphql_axum::{GraphQLRequest, GraphQLResponse};
use axum::{
    response::{self, IntoResponse},
    Extension,
};
use axum_sessions::extractors::WritableSession;
use serde_json::{json, Value};

use crate::{
    routing,
    schema::{self},
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
    if let Some(user_id) = user_id {
        request.data.insert(user_id.clone());
    }

    // Execute the query and get the result.
    let mut schema_result = schema.execute(request).await;
    let schema_result_data = &schema_result.data;

    // Convert the response data to JSON.
    let query_json = match schema_result_data.clone().into_json() {
        Ok(query_json) => query_json,
        Err(err) => {
            // Log the error.
            tracing::error!("Failed to convert response data to JSON: {:#?}", err);

            // Construct a GraphQL error.
            let error = ServerError::new(
                format!("Failed to convert response data to JSON: {}", err),
                None,
            );

            // Include the error in the response.
            schema_result.errors.push(error);

            // Continue processing with an empty JSON object.
            json!({})
        }
    };

    // Check if the query name is "featureA" and extract the corresponding object.
    if let Some(feature_a_data) = query_json.get("featureA").and_then(Value::as_object) {
        // Check if user_id is present inside the featureA object.
        if let Some(user_id) = feature_a_data.get("userId").and_then(Value::as_str) {
            tracing::info!("Adding user_id to session: {:#?}", &user_id);
            // Perform actions with user_id, such as inserting it into the session.
            session
                .insert("user_id", user_id.to_string())
                .expect("Could not store the user id");
        }
    }

    schema_result.into()
}
