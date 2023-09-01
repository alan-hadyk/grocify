use clients::create_clients;
use initializers::run_initializers;
use routing::create_router;
use server::run_server;

// Modules
mod clients;
mod config;
mod features;
mod helpers;
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
    create_clients().await;

    // Router
    let router = create_router().await;

    // Run the server
    run_server(router).await;
}
