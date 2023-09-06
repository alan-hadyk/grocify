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

6.Install `sqlx-cli`

```rust
cargo install sqlx-cli
```

7.Install [Trunk Check](https://marketplace.visualstudio.com/items?itemName=Trunk.io) VS Code extension

8.Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)

9.Create `Settings.toml` file at `/server` directory. Inside, paste the content from `Settings.example.toml`.

10.Build the project

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

### Generate SQL query metadata

```rust
cargo make query-metadata
```

### Compile for production

```rust
cargo build --release
```

### Build this package's and its dependencies' documentation

```rust
cargo doc
```

### Run a binary (requires build with `cargo build  --release`)

```rust
cargo run
```

### Run the tests

```rust
cargo make test-app
```

### Update dependencies in `Cargo.lock`

```rust
cargo update
```
