use crate::{
    clients::create_clients,
    services::{
        routing_service::{RoutingService, UserId},
        schema_service::SchemaService,
    },
};
use async_graphql::Request;
use sqlx::query;
use std::any::{Any, TypeId};

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

#[tokio::test]
async fn routing_service_convert_response_data_to_json() {
    let clients = create_clients().await;
    let clients_cleanup = create_clients().await;

    query("DELETE FROM users")
        .execute(&clients_cleanup.db_pool)
        .await
        .expect("Failed to clean users table")
        .rows_affected();

    let schema = SchemaService::create_schema(clients.db_pool);

    let mutation = r#"
        mutation {
            createUser(
                username: "username",
                password: "password",
                email: "user@gmail.com",
                preferredLanguage: EN
            ) {
                username
                email
            }
        }
    "#;

    // Execute the query and get the result.
    let mut schema_result = schema.execute(mutation).await;

    // Convert the response data to JSON.
    let query_json = RoutingService::convert_response_data_to_json(&mut schema_result);

    let create_user_data = query_json.get("createUser");

    match create_user_data {
        Some(create_user_data) => {
            let username = create_user_data.get("username");

            match username {
                Some(username) => {
                    assert_eq!(username, "username");
                }
                None => {
                    panic!("Failed to get username in mutation result");
                }
            }

            let email = create_user_data.get("email");

            match email {
                Some(email) => {
                    assert_eq!(email, "user@gmail.com");
                }
                None => {
                    panic!("Failed to get email in mutation result");
                }
            }
        }
        None => {
            panic!("Failed to find createUser in mutation result");
        }
    }

    query("DELETE FROM users")
        .execute(&clients_cleanup.db_pool)
        .await
        .expect("Failed to clean users table")
        .rows_affected();
}
