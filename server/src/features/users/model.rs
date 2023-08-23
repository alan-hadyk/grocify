use super::{
    enums::PreferredLang,
    errors::{UserGetByError, UserModelError},
    schema::User,
};
use sqlx::{query_as, types::Uuid, Error, Pool, Postgres};

pub struct UserModel<'a> {
    pub db_pool: &'a Pool<Postgres>,
}

impl UserModel<'_> {
    // Create new user
    pub async fn create(
        &self,
        username: String,
        password_hash: String,
        email: String,
        preferred_language: PreferredLang,
    ) -> Result<User, Error> {
        let db_pool = self.db_pool;

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
        let db_pool = self.db_pool;

        match (id, username) {
            (Some(uid), None) => {
                // Fetch by ID
                let query = "SELECT * FROM users WHERE id = $1";
                let user = query_as::<_, User>(query)
                    .bind(uid)
                    .fetch_one(&*db_pool)
                    .await?;

                Ok(user)
            }
            (None, Some(uname)) => {
                // Fetch by username
                let query = "SELECT * FROM users WHERE username = $1";
                let user = query_as::<_, User>(query)
                    .bind(uname)
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
