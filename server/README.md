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

4.Install `cargo-make`

```rust
cargo install --force cargo-make
```

5.Install [Trunk Check](https://marketplace.visualstudio.com/items?itemName=Trunk.io) VS Code extension

### Run the server in watch mode for development

```rust
cargo make dev
```

## CLI Scripts

### Watch mode (development)

```rust
cargo make dev
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
