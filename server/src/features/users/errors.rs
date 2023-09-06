use std::fmt::{Display, Formatter, Result};

#[derive(Debug)]
pub enum UserGetByError {
    BothIdAndUsernameProvided,
    NeitherIdNorUsernameProvided,
    DatabaseError(sqlx::Error),
}

impl Display for UserGetByError {
    fn fmt(&self, formatter: &mut Formatter) -> Result {
        match self {
            UserGetByError::BothIdAndUsernameProvided => {
                write!(
                    formatter,
                    "Both ID and username cannot be provided at the same time"
                )
            }
            UserGetByError::NeitherIdNorUsernameProvided => {
                write!(formatter, "Either ID or username must be provided")
            }
            UserGetByError::DatabaseError(err) => write!(formatter, "Database error: {}", err),
        }
    }
}

impl std::error::Error for UserGetByError {}

impl From<sqlx::Error> for UserGetByError {
    fn from(err: sqlx::Error) -> Self {
        UserGetByError::DatabaseError(err)
    }
}

#[derive(Debug)]
pub enum UserModelError {
    SqlxError(sqlx::Error),
    UserGetByError(UserGetByError),
}

impl Display for UserModelError {
    fn fmt(&self, formatter: &mut Formatter) -> Result {
        match self {
            UserModelError::SqlxError(err) => write!(formatter, "Database error: {}", err),
            UserModelError::UserGetByError(err) => err.fmt(formatter),
        }
    }
}

impl std::error::Error for UserModelError {}

impl From<sqlx::Error> for UserModelError {
    fn from(err: sqlx::Error) -> Self {
        UserModelError::SqlxError(err)
    }
}

impl From<UserGetByError> for UserModelError {
    fn from(err: UserGetByError) -> Self {
        UserModelError::UserGetByError(err)
    }
}
