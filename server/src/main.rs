// Modules
mod clients;
mod config;
mod initializers;
mod routing;
mod schema;
mod server;

// Main function
#[tokio::main]
async fn main() {
    // Initializers
    initializers::run_initializers();

    // Clients
    let clients = clients::create_clients().await;

    // Router
    let router = routing::create_router(clients.db_pool, clients.redis_connection);

    // Run the server
    server::run_server(router).await;
}
