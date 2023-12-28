package graph

import "grocify-server/db"

//go:generate go run github.com/99designs/gqlgen generate

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	DB *db.DB
}

func CreateResolver(db *db.DB) *Resolver {
    return &Resolver { DB: db }
}