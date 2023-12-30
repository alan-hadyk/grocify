package services

import (
	"fmt"
	"grocify-server/config"

	"github.com/golang-jwt/jwt/v5"
)

func CreateJWTToken(claims jwt.Claims) (string, error) {
	// Create a new token object, specifying signing method and the claims
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	cfg := config.LoadConfig()

	// Sign and get the complete encoded token as a string using the secret
	tokenString, err := token.SignedString(cfg.Secret)

	if err != nil {
		return "", err
	} else {
		return tokenString, nil
	}
}

func ParseJWTToken(tokenString string, claims jwt.Claims) (jwt.MapClaims, error) {
	cfg := config.LoadConfig()

	// Create a new token object, specifying signing method and the claims
	token, err := jwt.ParseWithClaims(tokenString, claims, func(token *jwt.Token) (interface{}, error) {
		// Validate the alg
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}

		// First value is a []byte containing secret, e.g. []byte("my_secret_key")
		return []byte(cfg.Secret), nil
	})

	if err != nil {
		return nil, err
	}

	if tokenClaims, ok := token.Claims.(jwt.MapClaims); ok {
		return tokenClaims, nil
	} else {
		return nil, err
	}
}
