use ::redis::aio::Connection;
use redis::Client;

use crate::config;

pub struct RedisInterface {
    pub redis_client: Client,
    pub redis_connection: Connection,
}

pub async fn create_redis_interface() -> RedisInterface {
    // Grab config
    let config = config::get_config();
    let redis_url = config.redis_url.as_str();

    // Create redis client
    let redis_client = match Client::open(redis_url) {
        Ok(client) => {
            tracing::info!("Redis client is open");

            client
        }
        Err(err) => {
            // Log the error
            tracing::error!("Failed to create the Redis client: {}", err);
            // Handle the error by returning a default value or exiting the program
            std::process::exit(1);
        }
    };

    // Connect to Redis
    let redis_connection = match redis_client.get_async_connection().await {
        Ok(connection) => {
            tracing::info!("Redis is ready to accept connections");

            connection
        }
        Err(err) => {
            // Log the error
            tracing::error!("Failed to create the Redis client: {}", err);
            // Handle the error by returning a default value or exiting the program
            std::process::exit(1);
        }
    };

    RedisInterface {
        redis_client,
        redis_connection,
    }
}
