package db

import (
	"context"
	"fmt"
	"grocify-server/graph/model"
	"grocify-server/services"
	"log"
	"os"
	"time"
)

func (db *DB) InitUserSchema() {
	_, err := db.Pool.Exec(context.Background(), `
		CREATE TABLE IF NOT EXISTS users (
			id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
			password_hash TEXT NOT NULL,
			email TEXT NOT NULL,
			preferred_language TEXT NOT NULL,
			created_at TIMESTAMP NOT NULL DEFAULT NOW()
		);
	`)

	if err != nil {
		fmt.Fprintf(os.Stderr, "InitUserSchema failed: %v\n", err)
		os.Exit(1)
	} else {
		log.Printf("users schema initialized  \n")
	}
}

func (db *DB) CreateUser(ctx context.Context, input model.CreateUserInput) (*model.User, error) {
	var id, email, preferredLanguage string
	var createdAt time.Time

	// Hash the password
	hashedPassword, err := services.HashPassword(input.Password)
	if err != nil {
		return nil, fmt.Errorf("failed to hash password: %w", err)
	}

	err = db.Pool.QueryRow(ctx, `
		INSERT
		INTO users (
			password_hash,
			email,
			preferred_language
		)
		VALUES (
			$1, $2, $3
		)
		RETURNING id, email, preferred_language, created_at
	`,
		hashedPassword,
		input.Email,
		services.MapLanguageToLocale[input.PreferredLanguage]).Scan(&id, &email, &preferredLanguage, &createdAt)

	if err != nil {
		return nil, fmt.Errorf("failed to create user: %w", err)
	}

	isoCreatedAt := createdAt.Format(time.RFC3339)

	return &model.User{
		ID:                id,
		Email:             email,
		PreferredLanguage: model.Language(preferredLanguage),
		CreatedAt:         isoCreatedAt,
	}, nil
}

func (db *DB) DeleteUser(ctx context.Context) (bool, error) {
	return true, nil
}

func (db *DB) UpdateUser(ctx context.Context, input model.UpdateUserInput) (*model.User, error) {
	return nil, nil
}

func (db *DB) GetUser(ctx context.Context) (*model.User, error) {
	var id, email, preferredLanguage string
	var createdAt time.Time

	err := db.Pool.QueryRow(ctx, `
		SELECT id, email, preferred_language, created_at
		FROM users
		WHERE id = $1
	`,
		"123").Scan(&id, &email, &preferredLanguage, &createdAt)

	if err != nil {
		return nil, fmt.Errorf("failed to create user: %w", err)
	}

	isoCreatedAt := createdAt.Format(time.RFC3339)

	return &model.User{
		ID:                id,
		Email:             email,
		PreferredLanguage: model.Language(preferredLanguage),
		CreatedAt:         isoCreatedAt,
	}, nil
}
