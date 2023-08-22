use std::fmt;

#[derive(sqlx::Type)]
#[sqlx(type_name = "preferred_language", rename_all = "lowercase")]
pub enum PreferredLanguage {
    En,
    Pl,
}

impl fmt::Display for PreferredLanguage {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        // Convert the enum variant to a string
        let variant_str = match *self {
            PreferredLanguage::En => "En",
            PreferredLanguage::Pl => "Pl",
        };

        // Write out the variant name
        write!(f, "{}", variant_str)
    }
}
