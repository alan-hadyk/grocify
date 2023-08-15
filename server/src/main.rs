use clients::create_clients;
use initializers::run_initializers;
use routing::create_router;
use server::run_server;

// Modules
mod clients;
mod config;
mod features;
mod initializers;
mod routing;
mod schema;
mod server;
mod services;

// Main function
#[tokio::main]
async fn main() {
    // Initializers
    run_initializers();

    // Clients
    let clients = create_clients().await;

    // Router
    let router = create_router(clients.db_pool).await;

    // Run the server
    run_server(router).await;
}
