use async_graphql::{EmptyMutation, EmptySubscription, Object, Schema};

pub struct Query;

#[Object]
impl Query {
    async fn value(&self) -> i32 {
        100
    }
}

pub type AppSchema = Schema<Query, EmptyMutation, EmptySubscription>;

// Create the schema
pub fn create_schema() -> AppSchema {
    Schema::build(Query, EmptyMutation, EmptySubscription).finish()
}
