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

5.Install `cargo-watch`

```rust
cargo install cargo-watch
```

6.Install [Trunk Check](https://marketplace.visualstudio.com/items?itemName=Trunk.io) VS Code extension

7.Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)

8.Create `Settings.toml` file at `server`. Inside, paste the content from `Settings.example.toml`.

9.Build the project

```rust
cargo build
```

### Run the server in watch mode for development

1.Run Docker Desktop

2.Use the following command in terminal

```rust
cargo make dev
```

3.If everything works, you should see the following log in the terminal:

```bash
INFO grocify_server::server: Server running at 127.0.0.1:3000
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
