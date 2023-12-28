package clients

import (
	"context"
	"fmt"
	"grocify-server/config"
	"os"

	"github.com/jackc/pgx/v5"
)


func ConnectDB() *pgx.Conn {
	cfg := config.LoadConfig()
	conn, err := pgx.Connect(context.Background(), cfg.PostgresURL)
	
    if err != nil {
        fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
    }

	defer conn.Close(context.Background())

    return conn
}