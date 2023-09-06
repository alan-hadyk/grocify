use std::sync::Arc;

use self::db_pool::get_db_pool;
use sqlx::{migrate, Pool, Postgres};

pub mod db_pool;

pub struct Clients {
    pub db_pool: Arc<Pool<Postgres>>,
}

pub async fn create_clients() -> Clients {
    // Database pool
    let db_pool_arc = get_db_pool().await;
    let db_pool = Arc::clone(&db_pool_arc);

    // Run migrations
    match migrate!().run(&*db_pool).await {
        Ok(_) => {
            tracing::info!("Migrations run successfully");
        }
        Err(err) => {
            // Log the error
            tracing::error!("Failed to run migrations: {}", err);
            // Handle the error by exiting the program
            panic!("Failed to run migrations: {}", err);
        }
    };

    Clients {
        db_pool: db_pool_arc,
    }
}

#[cfg(test)]
mod tests;
