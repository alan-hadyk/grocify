package db

import (
	"context"
	"errors"
	"fmt"
	"grocify-server/graph/model"
	"grocify-server/services"
	"log"
	"os"
	"time"

	"github.com/jackc/pgx/v5"
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

func (db *DB) UserCreate(ctx context.Context, input model.CreateUserInput) (*model.User, error) {
	var id, email, preferredLanguage string
	var createdAt time.Time

	existingUser, _ := db.UserGet(ctx, input.Email, ByEmail)

	if existingUser != nil {
		return nil, fmt.Errorf("user with email %s already exists", input.Email)
	}

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

func (db *DB) UserDelete(ctx context.Context) (bool, error) {
	return true, nil
}

func (db *DB) UserUpdate(ctx context.Context, input model.UpdateUserInput) (*model.User, error) {
	return nil, nil
}

type UserSearchType int

const (
	ByID UserSearchType = iota
	ByEmail
)

func (db *DB) UserGet(ctx context.Context, value string, searchType UserSearchType) (*model.User, error) {
	var query string
	switch searchType {
	case ByID:
		query = "SELECT id, email, preferred_language, created_at FROM users WHERE id = $1"
	case ByEmail:
		query = "SELECT id, email, preferred_language, created_at FROM users WHERE email = $1"
	default:
		return nil, errors.New("invalid search type")
	}

	var id, email, preferredLanguage string
	var createdAt time.Time

	err := db.Pool.QueryRow(ctx, query, value).Scan(&id, &email, &preferredLanguage, &createdAt)

	if err != nil {
		if err == pgx.ErrNoRows {
			return nil, nil
		}
		return nil, fmt.Errorf("failed to get user: %w", err)
	}

	isoCreatedAt := createdAt.Format(time.RFC3339)

	return &model.User{
		ID:                id,
		Email:             email,
		PreferredLanguage: model.Language(preferredLanguage),
		CreatedAt:         isoCreatedAt,
	}, nil
}
