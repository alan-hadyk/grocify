use async_graphql::Object;

use crate::schema::{schema_context::get_schema_context, session_user_id::get_session_user_id};

use super::schema::FeatureA;

pub struct FeatureAResolver {}

#[Object]
impl FeatureAResolver {
    pub async fn feature_a(
        &self,
        ctx: &async_graphql::Context<'_>,
    ) -> async_graphql::Result<FeatureA> {
        let schema_context = get_schema_context(ctx);
        let session_user_id = get_session_user_id(ctx);

        if let Some(session_user_id) = session_user_id {
            tracing::info!("session_user_id: {:#?}", session_user_id);
        } else {
            tracing::error!("No user_id in context");
        }

        Ok(FeatureA {
            author: "John Doe".to_string(),
            content: "Lorem Ipsum".to_string(),
            value: 100,
            user_id: "123_456_789".to_string(),
        })
    }
}
