use self::tracing_initializer::init_tracing;

mod tracing_initializer;

pub fn run_initializers() {
    init_tracing();
}
