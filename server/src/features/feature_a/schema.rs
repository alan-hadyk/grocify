use async_graphql::Object;

pub struct FeatureA {
    pub author: String,
    pub content: String,
    pub value: i32,
    pub user_id: String,
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
