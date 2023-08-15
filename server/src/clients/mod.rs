use self::db_pool::create_db_pool;
use sqlx::{Pool, Postgres};

mod db_pool;

pub struct Clients {
    pub db_pool: Pool<Postgres>,
}

pub async fn create_clients() -> Clients {
    // Database pool
    let db_pool = create_db_pool().await;

    Clients { db_pool }
}
