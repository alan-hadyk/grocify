use self::db_pool::create_db_pool;
use sqlx::{migrate, Pool, Postgres};

mod db_pool;

pub struct Clients {
    pub db_pool: Pool<Postgres>,
}

pub async fn create_clients() -> Clients {
    // Database pool
    let db_pool = create_db_pool().await;

    // Run migrations
    match migrate!().run(&db_pool).await {
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

    Clients { db_pool }
}

#[cfg(test)]
mod tests;
