use self::{mutation::Mutation, query::Query};
use async_graphql::{EmptySubscription, Schema};

pub mod mutation;
pub mod query;

pub type AppSchema = Schema<Query, Mutation, EmptySubscription>;

#[cfg(test)]
mod tests;
