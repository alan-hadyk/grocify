package router

import (
	"grocify-server/db"
	"grocify-server/graph"
	"net/http"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/handler/transport"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/gorilla/mux"
	"github.com/urfave/negroni"
)

func CreateRouter(db *db.DB) *negroni.Negroni {
	graphQlServer := handler.NewDefaultServer(
		graph.NewExecutableSchema(
			graph.Config{Resolvers: graph.CreateResolver(db)},
		),
	)

	graphQlServer.AddTransport(transport.Options{})
	graphQlServer.AddTransport(transport.POST{})

	router := mux.NewRouter()

	router.HandleFunc("/", playground.Handler("GraphQL playground", "/query"))
	router.Handle("/query", graphQlServer)

	negroniInstance := negroni.Classic() // Includes some default middlewares

	http.Handle("/", router)

	negroniInstance.UseHandler(router)

	return negroniInstance
}
