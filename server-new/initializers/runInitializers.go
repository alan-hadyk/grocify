package initializers

import "grocify-server/db"

func RunInitializers(db *db.DB) {
	// DB init
	db.InitDbExtensions()
	db.InitUserSchema()
}
