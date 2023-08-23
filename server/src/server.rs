use crate::config::get_config;
use axum::{Router, Server};

pub async fn run_server(router: Router) {
    // Grab config
    let config = get_config();

    tracing::info!("Server running at {}", &config.socket_address); // Print the message here

    // Run the server
    if let Err(err) = Server::bind(&config.socket_address)
        .serve(router.into_make_service())
        .await
    {
        tracing::error!("Server was not able to start: {}", err);
    }
}
