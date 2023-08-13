use super::schema_context::Ctx;

pub fn get_session_user_id<'a>(ctx: &'a Ctx) -> Option<&'a String> {
    let session_user_id = ctx.data_opt::<String>();

    session_user_id
}
