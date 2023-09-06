use crate::{helpers::redis_keys::RedisKey, services::session_service::SessionService};
use axum::{
    body::Body,
    http::{Request, StatusCode},
    routing::get,
    Router,
};
use axum_sessions::extractors::WritableSession;
use serde_json::json;
use tower::ServiceExt;

#[tokio::test]
async fn session_service_create_session_layer() {
    let _session_layer = SessionService::create_session_layer().await;

    // The function should have completed without panicking, hence reaching this point.
    assert!(true, "Successfully created session layer");
}

async fn test_handler(mut session: WritableSession) -> Result<String, StatusCode> {
    let sample_data = json!({
        "createUser": {
            "id": "sample_id",
        }
    });

    let insert_user_id_into_session_result =
        SessionService::insert_user_id_into_session(&sample_data, &mut session);

    if insert_user_id_into_session_result.is_ok()
        && session.get::<String>(RedisKey::USER_ID) == Some("sample_id".into())
    {
        Ok("success".to_string())
    } else {
        Err(StatusCode::INTERNAL_SERVER_ERROR)
    }
}

#[tokio::test]
async fn session_service_insert_user_id_into_session() {
    let session_layer = SessionService::create_session_layer().await;

    let router = Router::new()
        .route("/test", get(test_handler))
        .layer(session_layer);

    let response = router
        .oneshot(Request::builder().uri("/test").body(Body::empty()).unwrap())
        .await
        .unwrap();

    assert_eq!(response.status(), StatusCode::OK);

    let body = hyper::body::to_bytes(response.into_body()).await.unwrap();
    assert_eq!(&body[..], b"success");
}
