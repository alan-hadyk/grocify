mod tracing_initializer;

pub fn run_initializers() {
    tracing_initializer::init_tracing();
}
