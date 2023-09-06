use crate::config::get_config;
use sqlx::postgres::{PgPoolOptions, Postgres};
use sqlx::Pool;
use std::sync::Arc;

pub async fn get_db_pool() -> Arc<Pool<Postgres>> {
    let config = get_config();

    let db_pool = match PgPoolOptions::new()
        .max_connections(100)
        .connect(&config.postgres_url)
        .await
    {
        Ok(pool) => {
            tracing::info!("Database system is ready to accept connections");

            pool
        }
        Err(err) => {
            // Log the error
            tracing::error!("Failed to create the database pool: {}", err);
            // Handle the error by exiting the program
            panic!("Failed to create the database pool: {}", err);
        }
    };

    Arc::new(db_pool)
}
