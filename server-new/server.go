package main

import (
	"grocify-server/clients"
	"grocify-server/config"
	"grocify-server/db"
	"grocify-server/graph"
	"log"
	"net/http"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/gorilla/mux"
)

func main() {
	cfg := config.LoadConfig()

	dbConnection := clients.ConnectDB()

	db := db.NewDB(dbConnection)

	// DB init
	db.InitDbExtensions()
	db.InitUserSchema()

	server := handler.NewDefaultServer(
		graph.NewExecutableSchema(
			graph.Config{Resolvers: graph.CreateResolver(db)},
		),
	)

	router := mux.NewRouter()

	router.HandleFunc("/", playground.Handler("GraphQL playground", "/query"))
	router.Handle("/query", server)

	http.Handle("/", router)

	log.Printf("Server up and running")
	log.Printf("GraphQL playground available at http://%s:%s/", cfg.Host, cfg.Port)
	log.Fatal(http.ListenAndServe(cfg.Host+":"+cfg.Port, nil))
}
