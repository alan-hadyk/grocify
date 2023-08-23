use async_graphql::Enum;
use serde::{Deserialize, Serialize};
use std::fmt::{Display, Formatter, Result};

#[derive(sqlx::Type, Debug, Deserialize, Serialize, Enum, Copy, Clone, Eq, PartialEq)]
#[sqlx(type_name = "preferred_lang", rename_all = "lowercase")]
pub enum PreferredLang {
    En,
    Pl,
}

impl Display for PreferredLang {
    fn fmt(&self, f: &mut Formatter) -> Result {
        // Convert the enum variant to a string
        let variant_str = match *self {
            PreferredLang::En => "en",
            PreferredLang::Pl => "pl",
        };

        // Write out the variant name
        write!(f, "{}", variant_str)
    }
}
