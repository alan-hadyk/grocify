use async_graphql::{EmptyMutation, EmptySubscription, Object, Schema};
use lazy_static::lazy_static;

pub struct Query;

#[Object]
impl Query {
    async fn value(&self) -> i32 {
        100
    }
}

pub type AppSchema = Schema<Query, EmptyMutation, EmptySubscription>;

lazy_static! {
    static ref SCHEMA: AppSchema = Schema::build(Query, EmptyMutation, EmptySubscription).finish();
}

// Create the schema
pub fn get_schema() -> &'static AppSchema {
    &SCHEMA
}
