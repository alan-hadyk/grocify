use std::net::SocketAddr;

// Modules
mod handlers;
mod router;
mod schema;

// Main function
#[tokio::main]
async fn main() {
    tracing_subscriber::fmt::init();

    let router = router::create_router();

    let socket_address = SocketAddr::from(([127, 0, 0, 1], 3000));
    tracing::info!("Server running on {}", socket_address);

    axum::Server::bind(&socket_address)
        .serve(router.into_make_service())
        .await
        .unwrap();
}
