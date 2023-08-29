use async_graphql::{Request, Response, ServerError};
use serde_json::{json, Value};

pub struct RoutingService;

#[derive(Hash, Eq, PartialEq, Debug)]
pub struct UserId(pub String);

impl RoutingService {
    pub fn append_user_id_to_request_data(request: &mut Request, user_id: Option<String>) {
        if let Some(user_id) = user_id {
            request.data.insert(UserId(user_id));
        }
    }

    pub fn convert_response_data_to_json(response: &mut Response) -> Value {
        match response.data.clone().into_json() {
            Ok(json) => json,
            Err(err) => {
                tracing::error!("Failed to convert response data to JSON: {:#?}", err);

                response
                    .errors
                    .push(ServerError::new(format!("Internal Server Error"), None));

                // Continue processing with empty json
                json!({})
            }
        }
    }
}
