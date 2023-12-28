package db

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/jackc/pgx/v5/pgxpool"
)

type DB struct {
	Pool *pgxpool.Pool
}

func NewDB(pool *pgxpool.Pool) *DB {
	return &DB{ Pool: pool }
}

func (db *DB) InitDbExtensions() {
	_, err := db.Pool.Exec(context.Background(), `
		CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
	`)

	if err != nil {
		fmt.Fprintf(os.Stderr, "InitDbExtensions failed: %v\n", err)
		os.Exit(1)
	} else {
		log.Printf("DB extensions initialized  \n")
	}
}