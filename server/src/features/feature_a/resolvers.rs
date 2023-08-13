use async_graphql::Object;

use crate::schema::schema_context::get_schema_context;

pub struct FeatureA {
    author: String,
    content: String,
    value: i32,
    user_id: String,
}

#[Object]
impl FeatureA {
    async fn author(&self) -> String {
        self.author.to_string()
    }

    async fn content(&self) -> String {
        self.content.to_string()
    }

    async fn value(&self) -> i32 {
        self.value
    }

    async fn user_id(&self) -> String {
        self.user_id.to_string()
    }
}

pub struct FeatureAResolver {}

#[Object]
impl FeatureAResolver {
    pub async fn feature_a(
        &self,
        ctx: &async_graphql::Context<'_>,
    ) -> async_graphql::Result<FeatureA> {
        let schema_context = get_schema_context(ctx);

        let user_id_result = ctx.data_opt::<String>();

        if user_id_result.is_some() {
            tracing::info!("user_id as ctx.data_opt: {:#?}", user_id_result);
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
