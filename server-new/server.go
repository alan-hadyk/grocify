package main

import (
	"grocify-server/clients"
	"grocify-server/config"
	"grocify-server/graph"
	"log"
	"net/http"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
)

func main() {
	cfg := config.LoadConfig()

	dbConnection := clients.ConnectDB()

	server := handler.NewDefaultServer(
		graph.NewExecutableSchema(
			graph.Config { Resolvers: graph.CreateResolver(dbConnection) },
		),
	)

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", server)

	log.Printf("Server up and running")
	log.Printf("GraphQL playground available at http://%s:%s/", cfg.Host, cfg.Port)
	log.Fatal(http.ListenAndServe(cfg.Host + ":" + cfg.Port, nil))
}