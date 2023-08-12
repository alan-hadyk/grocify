use ::redis::aio::Connection;
use sqlx::{Pool, Postgres};

mod db_pool;
mod redis;

pub struct Clients {
    pub db_pool: Pool<Postgres>,
    pub redis_connection: Connection,
}

pub async fn create_clients() -> Clients {
    // Database pool
    let db_pool = db_pool::create_db_pool().await;

    // Redis connection
    let redis_connection = redis::create_redis_connection().await;

    Clients {
        db_pool,
        redis_connection,
    }
}
