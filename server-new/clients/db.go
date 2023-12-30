package clients

import (
	"context"
	"fmt"
	"grocify-server/config"
	"log"
	"os"

	"github.com/jackc/pgx/v5/pgxpool"
)

func ConnectDB() *pgxpool.Pool {
	cfg := config.LoadConfig()
	dbpool, err := pgxpool.New(context.Background(), cfg.PostgresURL)

	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	} else {
		log.Printf("Connection to database established \n")
	}

	return dbpool
}
