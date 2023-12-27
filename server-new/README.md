# Grocify - server

## Table of Contents

1. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Run the server in watch mode for development](#run-the-server-in-watch-mode-for-development)
2. [CLI Scripts](#cli-scripts)

## Getting Started

### **Prerequisites**

1.[Install Go](https://go.dev/doc/install)

2.Install [Trunk Check](https://marketplace.visualstudio.com/items?itemName=Trunk.io) VS Code extension

3.Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)

4.Create `Settings.toml` file at `/server` directory. Inside, paste the content from `Settings.example.toml`.

5.Install dependencies

```bash
go mod tidy
```

### **Run the server in watch mode for development**

1.Run Docker Desktop

2.Use the following command in terminal

```bash
make dev
```

3.If everything works, you should see the following log in the terminal:

```bash
connect to http://localhost:8080/ for GraphQL playground
```

## CLI Scripts

### **Regenerate code (run this command each time you want to regenerate code)**

```bash
go generate ./...
```

### **Run Docker containers and server (Unix systems only)**

```bash
make dev
```
