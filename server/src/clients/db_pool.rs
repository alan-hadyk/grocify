use sqlx::{postgres::PgPoolOptions, Pool, Postgres};

use crate::config;

pub async fn create_db_pool() -> Pool<Postgres> {
    // Grab config
    let config = config::get_config();

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
            // Handle the error by returning a default value or exiting the program
            std::process::exit(1);
        }
    };

    db_pool
}
