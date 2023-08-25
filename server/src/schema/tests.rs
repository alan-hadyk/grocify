use crate::{clients::create_clients, services::schema_service::SchemaService};
use sqlx::query;

#[tokio::test]
async fn mutation_create_user() {
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

    let response = schema.execute(mutation).await;

    if response.errors.len() > 0 {
        panic!("Mutation failed: {:#?}", response.errors);
    }

    let data = response.data;
    let json_data = data.into_json();

    match json_data {
        Ok(json) => {
            let json_as_object = json.as_object().expect("Expected JSON object");

            let create_user = json_as_object
                .get("createUser")
                .expect("createUser field missing")
                .as_object()
                .expect("createUser should be an object");

            let username = create_user
                .get("username")
                .expect("username field missing")
                .as_str()
                .expect("username should be a string");

            assert_eq!(username, "username");

            let email = create_user
                .get("email")
                .expect("email field missing")
                .as_str()
                .expect("email should be a string");

            assert_eq!(email, "user@gmail.com");
        }
        Err(err) => {
            panic!("Missing data: {:#?}", err);
        }
    }

    query("DELETE FROM users")
        .execute(&clients_cleanup.db_pool)
        .await
        .expect("Failed to clean users table")
        .rows_affected();
}
