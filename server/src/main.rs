// Modules
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

    // Router
    let router = routing::create_router();

    // Run the server
    server::run_server(router).await;
}
