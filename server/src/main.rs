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
    initializers::run_initializers();

    // Clients
    let clients = clients::create_clients().await;

    // Services
    let session_service = services::session_service::SessionService::new().await;

    // Router
    let router = routing::create_router(clients.db_pool, session_service.session_layer);

    // Run the server
    server::run_server(router).await;
}
