use crate::config::get_config;
use sqlx::{postgres::PgPoolOptions, Pool, Postgres};

pub async fn create_db_pool() -> Pool<Postgres> {
    // Grab config
    let config = get_config();

    let db_pool = match PgPoolOptions::new()
        .max_connections(10)
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

    db_pool
}
