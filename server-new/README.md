# Grocify - server

## Table of Contents

1. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Run the server in watch mode for development](#run-the-server-in-watch-mode-for-development)
2. [File structure](#file-structure)
3. [CLI Scripts](#cli-scripts)

## Getting Started

### **Prerequisites**

1.[Install Go](https://go.dev/doc/install)

2.Install [Trunk Check](https://marketplace.visualstudio.com/items?itemName=Trunk.io) VS Code extension

3.Install [Go](https://marketplace.visualstudio.com/items?itemName=golang.Go&ssr=false) VS Code extension

4.Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)

5.Create `.env` file in this directory. Inside, paste the content from `.env-example`.

6.Install dependencies

```bash
go mod tidy
```

7.Set permissions

```bash
chmod 600 ./certs/server.key
```


### **Run the server in watch mode for development**

1.Run Docker Desktop

2.Use the following command in terminal

```bash
make dev
```

3.If everything works, you should see the following log in the terminal:

```bash
Server up and running
GraphQL playground available at http://localhost:3000/
```

## File structure

```

.
├── Dockerfile # Used to run Go server in production
├── Makefile # Used to run CLI commands in bulk. For example, run server in development mode
├── README.md
├── certs # Certificates for local PostgreSQL database running inside Docker container
│   ├── data
│   ├── privkey.pem
│   ├── server.crt
│   ├── server.key
│   └── server.req
├── clients
│   └── db.go # Database instance
├── config
│   └── config.go # Config is used to grab values from `.env` files
├── db # Interface for interacting with database
│   ├── index.go
│   └── user.go # Interface for interacting with User model
├── docker-compose.dev.yml # PostgreSQL and Redis for local development
├── docker-compose.prod.yml # Go server, PostgreSQL and Redis for production
├── docker-compose.test.yml # PostgreSQL and Redis for tests
├── go.mod # Manages Go dependencies
├── go.sum
├── gqlgen.yml # Configuration for Gqlgen (https://gqlgen.com/config/)
├── graph
│   ├── generated.go # A package that only contains the generated runtime
│   ├── ingredient.resolvers.go # GraphQL resolvers for ingredients endpoints
│   ├── model # A package for all graph models, generated or otherwise
│   │   ├── models_gen.go
│   ├── notification.resolvers.go # GraphQL resolvers for notifications endpoints
│   ├── recipe.resolvers.go # GraphQL resolvers for recipes endpoints
│   ├── resolver.go
│   ├── schema.graphqls # GraphQL schema - entry point
│   ├── schema.resolvers.go # GraphQL resolvers - entry point
│   ├── schemas
│   │   ├── ingredient.graphqls # GraphQL schema - ingredients
│   │   ├── notification.graphqls # GraphQL schema - notifications
│   │   ├── recipe.graphqls # GraphQL schema - recipes
│   │   ├── shoppingList.graphqls # GraphQL schema - shopping lists
│   │   ├── unit.graphqls # GraphQL schema - units
│   │   └── user.graphqls # GraphQL schema - users
│   ├── shoppingList.resolvers.go # GraphQL resolvers for shopping lists endpoints
│   ├── unit.resolvers.go # GraphQL resolvers for units endpoints
│   └── user.resolvers.go # GraphQL resolvers for users endpoints
├── server.go # Go server - entry point
├── services
│   └── password.go # Service for dealing with passwords (hashing & verifying)
├── tmp # Temporary files
│   └── main
└── tools.go # Go packages that are not included in the bundle
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

### **Run server**

```bash
go run server.go
```
