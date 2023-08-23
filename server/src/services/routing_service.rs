use async_graphql::{Request, Response, ServerError};
use serde_json::{json, Value};

pub struct RoutingService;

impl RoutingService {
    pub fn append_user_id_to_request_data(request: &mut Request, user_id: Option<String>) {
        if let Some(user_id) = user_id {
            request.data.insert(user_id);
        }
    }

    pub fn convert_schema_data_to_json(schema_result: &mut Response) -> Value {
        match schema_result.data.clone().into_json() {
            Ok(json) => json,
            Err(err) => {
                tracing::error!("Failed to convert response data to JSON: {:#?}", err);

                schema_result
                    .errors
                    .push(ServerError::new(format!("Internal Server Error"), None));

                // Continue processing with empty json
                json!({})
            }
        }
    }
}
