use crate::helpers::{date_format::DateFormat, redis_keys::RedisKey};

#[test]
fn date_format_contains_correct_formats() {
    assert_eq!(DateFormat::ISO_8601, "%Y-%m-%dT%H:%M:%S%.3fZ");
}

#[test]
fn redis_keys_contains_correct_keys() {
    assert_eq!(RedisKey::USER_ID, "user_id");
}
