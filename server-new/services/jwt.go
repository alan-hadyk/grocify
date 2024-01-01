package services

import (
	"fmt"
	"grocify-server/config"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

type TokenClaims struct {
	ID string `json:"id"`
	jwt.RegisteredClaims
}

func CreateJWTToken(userID string) (string, error) {
	// Create a new token object, specifying signing method and the claims
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, TokenClaims{
		userID,
		jwt.RegisteredClaims{
			// Expiration time - 7 days
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Hour * 168)),
			IssuedAt:  jwt.NewNumericDate(time.Now()),
		},
	})

	cfg := config.LoadConfig()

	// Sign and get the complete encoded token as a string using the secret
	tokenString, err := token.SignedString(cfg.Secret)

	if err != nil {
		return "", err
	} else {
		return tokenString, nil
	}
}

func ParseJWTToken(tokenString string) (*TokenClaims, error) {
	cfg := config.LoadConfig()

	// Parse token object, specifying claims
	token, err := jwt.ParseWithClaims(tokenString, &TokenClaims{}, func(token *jwt.Token) (interface{}, error) {
		// Validate the algorithm
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}

		// First value is a []byte containing secret, e.g. []byte("my_secret_key")
		return []byte(cfg.Secret), nil
	})

	if err != nil {
		return nil, err
	}

	if claims, ok := token.Claims.(*TokenClaims); ok {
		return &TokenClaims{
			claims.ID,
			jwt.RegisteredClaims{
				ExpiresAt: claims.ExpiresAt,
				IssuedAt:  claims.IssuedAt,
			},
		}, nil
	} else {
		return nil, err
	}
}
