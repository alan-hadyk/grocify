use crate::{
    clients::db_pool::get_db_pool,
    features::users::{model::UserModel, resolver::UserResolver},
    schema::{mutation::Mutation, query::Query},
    services::schema_service::SchemaService,
};
use async_graphql::{EmptySubscription, Schema};
use sqlx::query;
use std::sync::Arc;

#[tokio::test]
async fn mutation_create_user() {
    let db_pool_arc = get_db_pool().await;
    let db_pool = Arc::clone(&db_pool_arc);

    let result = query("DELETE FROM users").execute(&*db_pool).await;

    match result {
        Ok(_) => {}
        Err(err) => {
            panic!("Failed to delete users: {}", err);
        }
    }

    let user_resolver = UserResolver {
        user_model: UserModel {
            db_pool: db_pool_arc.clone(),
        },
    };

    let graphql_query = Query {
        user_resolver: user_resolver.clone(),
    };
    let mutation = Mutation {
        user_resolver: user_resolver.clone(),
    };

    let schema = Schema::build(graphql_query, mutation, EmptySubscription).finish();

    let mutation = r#"
        mutation {
            createUser(
                username: "example_username",
                password: "password",
                email: "example_user@gmail.com",
                preferredLanguage: EN
            ) {
                username
                email
            }
        }
    "#;

    let response = schema.execute(mutation).await;
    println!("response!!!!!!: {:#?}", response);

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

            tracing::info!(
                "testing username with {} and {}",
                username,
                "example_username"
            );

            assert_eq!(username, "example_username",);

            let email = create_user
                .get("email")
                .expect("email field missing")
                .as_str()
                .expect("email should be a string");

            tracing::info!(
                "testing email with {} and {}",
                email,
                "example_user@gmail.com"
            );

            assert_eq!(email, "example_user@gmail.com",);
        }
        Err(err) => {
            panic!("Missing data: {:#?}", err);
        }
    }

    query("DELETE FROM users")
        .execute(&*db_pool)
        .await
        .expect("Failed to clean users table")
        .rows_affected();
}
