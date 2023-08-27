use crate::services::schema_service::SchemaService;

#[allow(dead_code)] // This annotation is to make sure there's no warning for an unused function
fn compile_time_check_for_get_schema_context() {
    let _ = SchemaService::get_schema_context;
}

#[allow(dead_code)] // This annotation is to make sure there's no warning for an unused function
fn compile_time_check_for_get_session_user_id() {
    let _ = SchemaService::get_session_user_id;
}

#[allow(dead_code)] // This annotation is to make sure there's no warning for an unused function
fn compile_time_check_for_create_schema() {
    let _ = SchemaService::create_schema;
}
