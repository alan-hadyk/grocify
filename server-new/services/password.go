package services

import (
	"github.com/matthewhartstonge/argon2"
)

func HashPassword(pwd string) (string, error) {
	argon := argon2.DefaultConfig()

	encoded, err := argon.HashEncoded([]byte(pwd))

	if err != nil {
		return "", err
	}

	return string(encoded), nil
}

func VerifyPassword(pwd string, hash string) (bool, error) {
	ok, err := argon2.VerifyEncoded([]byte(pwd), []byte(hash))

	if err != nil {
		return false, err
	}

	return ok, nil
}
