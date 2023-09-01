use crate::services::routing_service::{RoutingService, UserId};
use async_graphql::{Name, Request, Response, Value as GqlValue};
use indexmap::IndexMap;
use serde_json::Map as JsonMap;
use serde_json::Value as JsonValue;
use std::{
    any::{Any, TypeId},
    collections::BTreeMap,
};

#[test]
fn routing_service_append_user_id_to_request_data() {
    let mut request = Request::new("");

    let user_id_string = "3db05db8-a012-415f-9c99-529cad450063".to_string();
    let user_id = Some(user_id_string.clone());

    // Append user_id to request data
    RoutingService::append_user_id_to_request_data(&mut request, user_id);

    let type_id = TypeId::of::<UserId>();

    let req_user_id_boxed: Option<&Box<dyn Any + Send + Sync>> = request.data.get(&type_id);

    let actual_user_id = req_user_id_boxed
        .and_then(|boxed| boxed.downcast_ref::<UserId>())
        .expect("UserId not found or of wrong type");

    assert_eq!(actual_user_id.0, user_id_string);
}

// Function to convert serde_json::Value to async_graphql::Value
fn convert_to_gql_value(json_value: &JsonValue) -> GqlValue {
    match json_value {
        JsonValue::Null => GqlValue::Null,
        JsonValue::Number(n) => GqlValue::Number(n.clone().into()),
        JsonValue::String(s) => GqlValue::String(s.clone()),
        JsonValue::Bool(b) => GqlValue::Boolean(*b),
        JsonValue::Array(arr) => GqlValue::List(arr.iter().map(convert_to_gql_value).collect()),
        JsonValue::Object(obj) => {
            let mut map = IndexMap::new();
            for (key, value) in obj.iter() {
                map.insert(Name::new(key.clone()), convert_to_gql_value(value));
            }
            GqlValue::Object(map)
        }
    }
}

#[tokio::test]
async fn routing_service_convert_response_data_to_json() {
    let mut fake_data = BTreeMap::new();

    let mut user_data = BTreeMap::new();
    user_data.insert(
        "username".to_string(),
        JsonValue::String("John".to_string()),
    );
    user_data.insert(
        "email".to_string(),
        JsonValue::String("john@gmail.com".to_string()),
    );
    let user_data: JsonMap<String, JsonValue> = user_data.into_iter().collect();

    fake_data.insert("user".to_string(), JsonValue::Object(user_data));
    let fake_data: JsonMap<String, JsonValue> = fake_data.into_iter().collect();

    let gql_value = convert_to_gql_value(&JsonValue::Object(fake_data));

    let mut response = Response::new(gql_value);

    // Convert the response data to JSON.
    let query_json = RoutingService::convert_response_data_to_json(&mut response);

    let user_data = query_json.get("user");

    match user_data {
        Some(user_data) => {
            let username = user_data.get("username");

            match username {
                Some(username) => {
                    assert_eq!(username, "John");
                }
                None => {
                    panic!("Failed to get username in transformed query_json");
                }
            }

            let email = user_data.get("email");

            match email {
                Some(email) => {
                    assert_eq!(email, "john@gmail.com");
                }
                None => {
                    panic!("Failed to get email in transformed query_json");
                }
            }
        }
        None => {
            panic!("Failed to find createUser in transformed query_json");
        }
    }
}
