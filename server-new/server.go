package main

import (
	"grocify-server/clients"
	"grocify-server/config"
	"grocify-server/db"
	"grocify-server/initializers"
	"grocify-server/router"
	"log"
	"net/http"
)

func main() {
	// Create DB connection
	dbConnection := clients.ConnectDB()
	db := db.NewDB(dbConnection)

	// Initializers
	initializers.RunInitializers(db)

	// Router
	router := router.CreateRouter(db)

	cfg := config.LoadConfig()

	log.Printf("Server up and running")
	log.Printf("GraphQL playground available at http://%s:%s/", cfg.Host, cfg.Port)
	log.Fatal(http.ListenAndServe(cfg.Host+":"+cfg.Port, router))
}
