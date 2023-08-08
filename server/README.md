# Grocify server

## Getting Started

### Prerequisites

1.[Install Rust, Rustup and Cargo](https://www.rust-lang.org/tools/install)

2.Install `rustfmt`:

```rust
rustup component add rustfmt
```

3.Install `clippy`

```rust
rustup update
rustup component add clippy
```

### Run the server in watch mode for development

```rust
cargo watch -x run
```

## CLI Scripts

### Watch mode (development)

```rust
cargo watch -x run
```

### Analyze and report errors

```rust
cargo build
```

### Compile for production

```rust
cargo build
```

### Build this package's and its dependencies' documentation

```rust
cargo doc
```

### Run a binary (requires build with `cargo build`)

```rust
cargo run
```

### Run the tests

```rust
cargo test
```

### Update dependencies in `Cargo.lock`

```rust
cargo update
```
