use axum::Router;

use crate::config;

pub async fn run_server(router: Router) {
    // Grab config
    let config = config::get_config();

    tracing::info!("Server running at {}", &config.socket_address);

    // Run the server
    axum::Server::bind(&config.socket_address)
        .serve(router.into_make_service())
        .await
        .unwrap();
}
