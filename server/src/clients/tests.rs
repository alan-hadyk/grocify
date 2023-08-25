use crate::clients::{create_clients, db_pool::create_db_pool};
use sqlx::query_as;

#[tokio::test]
async fn create_db_pool_is_able_to_query() {
    let db_pool = create_db_pool().await;

    // Basic query to check if the pool works
    let result: (i32,) = query_as("SELECT 1")
        .fetch_one(&db_pool)
        .await
        .expect("Failed to run test query");

    assert_eq!(result.0, 1);
}

#[tokio::test]
async fn create_clients_runs_migrations_and_returns_db_pool() {
    let clients = create_clients().await;

    // Basic query to check if the pool works
    let result: (i32,) = query_as("SELECT 1")
        .fetch_one(&clients.db_pool)
        .await
        .expect("Failed to run test query");

    assert_eq!(result.0, 1);

    // Check if migrations were applied
    let table_check_result: (bool,) = query_as(
        "SELECT EXISTS (
            SELECT 1
            FROM information_schema.tables
            WHERE table_name = 'users'
            ) AS table_existence",
    )
    .fetch_one(&clients.db_pool)
    .await
    .expect("Failed to run test query");

    assert_eq!(table_check_result.0, true);
}
