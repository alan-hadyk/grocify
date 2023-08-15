use super::schema::FeatureA;
use crate::services::schema_service::SchemaService;
use async_graphql::{Context, Object, Result};

pub struct FeatureAResolver {}

#[Object]
impl FeatureAResolver {
    pub async fn feature_a(&self, ctx: &Context<'_>) -> Result<FeatureA> {
        let schema_context = SchemaService::get_schema_context(ctx)?;
        let session_user_id = SchemaService::get_session_user_id(ctx);

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
