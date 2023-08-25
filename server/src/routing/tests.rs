use crate::{
    clients::create_clients,
    routing::{create_router, paths::Path},
};
use axum::{
    body::Body,
    http::{Request, StatusCode},
};
use tower::ServiceExt; // for `oneshot` and `ready`

#[test]
fn path_contains_correct_paths() {
    assert_eq!(Path::ROOT, "/");
    assert_eq!(Path::GRAPHQL, "/graphql");
}

#[tokio::test]
async fn create_router_exposes_root_endpoint() {
    let clients = create_clients().await;
    let db_pool = clients.db_pool;

    let router = create_router(db_pool).await;

    // `Router` implements `tower::Service<Request<Body>>` so we can
    // call it like any tower service, no need to run an HTTP server.
    let response_root = router
        .oneshot(Request::builder().uri("/").body(Body::empty()).unwrap())
        .await
        .unwrap();

    assert_eq!(response_root.status(), StatusCode::OK);
}

#[tokio::test]
async fn create_router_exposes_graphql_endpoint() {
    let clients = create_clients().await;
    let db_pool = clients.db_pool;

    let router = create_router(db_pool).await;

    let request_body = Body::from(b"{}".to_vec());

    // `Router` implements `tower::Service<Request<Body>>` so we can
    // call it like any tower service, no need to run an HTTP server.
    let response_graphql = router
        .oneshot(
            Request::builder()
                .method("POST")
                .uri("/graphql")
                .body(request_body)
                .unwrap(),
        )
        .await
        .unwrap();

    assert_eq!(response_graphql.status(), StatusCode::OK);
}
