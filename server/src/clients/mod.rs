use ::redis::aio::Connection;
use redis::Client;
use sqlx::{Pool, Postgres};

mod db_pool;
mod redis_interface;

pub struct Clients {
    pub db_pool: Pool<Postgres>,
    pub redis_client: Client,
    pub redis_connection: Connection,
}

pub async fn create_clients() -> Clients {
    // Database pool
    let db_pool = db_pool::create_db_pool().await;

    // Redis connection
    let redis_interface = redis_interface::create_redis_interface().await;

    Clients {
        db_pool,
        redis_client: redis_interface.redis_client,
        redis_connection: redis_interface.redis_connection,
    }
}
