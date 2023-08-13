use async_graphql::ServerError;
use axum_sessions::extractors::WritableSession;
use serde_json::{json, Value};

pub fn append_user_id_to_request_data(
    request: &mut async_graphql::Request,
    user_id: Option<String>,
) {
    if let Some(user_id) = user_id {
        request.data.insert(user_id);
    }
}

pub fn convert_schema_data_to_json(schema_result: &mut async_graphql::Response) -> Value {
    match schema_result.data.clone().into_json() {
        Ok(json) => json,
        Err(err) => {
            tracing::error!("Failed to convert response data to JSON: {:#?}", err);

            schema_result.errors.push(ServerError::new(
                format!("Failed to convert response data to JSON: {}", err),
                None,
            ));

            json!({})
        }
    }
}

pub fn insert_user_id_into_session(query_json: &Value, session: &mut WritableSession) {
    if let Some(feature_a_data) = query_json.get("featureA").and_then(Value::as_object) {
        if let Some(user_id) = feature_a_data.get("userId").and_then(Value::as_str) {
            session
                .insert("user_id", user_id.to_string())
                .expect("Could not store the user id");
        }
    }
}
