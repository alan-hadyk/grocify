use std::sync::Arc;

use crate::clients::create_clients;
use sqlx::query_as;

#[tokio::test]
async fn create_clients_runs_migration_and_returns_db_pool() {
    let clients = create_clients().await;
    let db_pool_arc = clients.db_pool;
    let db_pool = Arc::clone(&db_pool_arc);

    // Check if migrations were applied
    let table_check_result: (bool,) = query_as(
        "SELECT EXISTS (
            SELECT 1
            FROM information_schema.tables
            WHERE table_name = 'users'
            ) AS table_existence",
    )
    .fetch_one(&*db_pool)
    .await
    .expect("Failed to run test query");

    assert_eq!(table_check_result.0, true);
}
