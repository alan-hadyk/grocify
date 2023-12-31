use super::{
    enums::PreferredLang,
    errors::{UserGetByError, UserModelError},
    schema::User,
};
use sqlx::{query_as, types::Uuid, Error, Pool, Postgres};
use std::sync::Arc;

#[derive(Clone)]
pub struct UserModel {
    pub db_pool: Arc<Pool<Postgres>>,
}

impl UserModel {
    // Create new user
    pub async fn create(
        &self,
        username: String,
        password_hash: String,
        email: String,
        preferred_language: PreferredLang,
    ) -> Result<User, Error> {
        let db_pool_arc = &self.db_pool;
        let db_pool = Arc::clone(db_pool_arc);

        let user = query_as::<_, User>(
            // language=PostgreSQL
            r#"
                INSERT
                INTO users (
                    id,
                    username,
                    password_hash,
                    email,
                    preferred_language,
                    created_at
                )
                VALUES (
                    gen_random_uuid(),
                    $1,
                    $2,
                    $3,
                    $4::preferred_lang, 
                    NOW()
                )
                RETURNING *
            "#,
        )
        .bind(username)
        .bind(password_hash)
        .bind(email)
        .bind(preferred_language)
        .fetch_one(&*db_pool)
        .await;

        user
    }

    // Get user by id or by username
    pub async fn get_by(
        &self,
        id: Option<Uuid>,
        username: Option<String>,
    ) -> Result<User, UserModelError> {
        let db_pool_arc = &self.db_pool;
        let db_pool = Arc::clone(db_pool_arc);

        match (id, username) {
            (Some(uuid), None) => {
                // Fetch by ID
                let query = "SELECT * FROM users WHERE id = $1";
                let user = query_as::<_, User>(query)
                    .bind(uuid)
                    .fetch_one(&*db_pool)
                    .await?;

                Ok(user)
            }
            (None, Some(user_name)) => {
                // Fetch by username
                let query = "SELECT * FROM users WHERE username = $1";
                let user = query_as::<_, User>(query)
                    .bind(user_name)
                    .fetch_one(&*db_pool)
                    .await?;

                Ok(user)
            }
            (Some(_), Some(_)) => {
                // Return an error if both ID and username are provided
                Err(UserModelError::UserGetByError(
                    UserGetByError::BothIdAndUsernameProvided,
                ))
            }
            (None, None) => {
                // Return an error if neither ID nor username are provided
                Err(UserModelError::UserGetByError(
                    UserGetByError::NeitherIdNorUsernameProvided,
                ))
            }
        }
    }
}
