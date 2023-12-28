package main

import (
	"grocify-server/graph"
	"log"
	"net/http"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
)

func main() {
	config := LoadConfig()

	server := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{}}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", server)

	log.Printf("Server up and running")
	log.Printf("GraphQL playground available at http://%s:%s/", config.Host, config.Port)
	log.Fatal(http.ListenAndServe(config.Host + ":" + config.Port, nil))
}