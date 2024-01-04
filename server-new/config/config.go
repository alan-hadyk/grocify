package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	Host        string
	Port        string
	PostgresURL string
	Secret      string
}

func LoadConfig() Config {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file", err)
	}

	config := Config{
		Host:        os.Getenv("HOST"),
		Port:        os.Getenv("PORT"),
		PostgresURL: os.Getenv("POSTGRES_URL"),
		Secret:      os.Getenv("SECRET"),
	}

	if config.Host == "" {
		log.Fatal("Missing HOST variable")
	}
	if config.Port == "" {
		log.Fatal("Missing PORT variable")
	}
	if config.PostgresURL == "" {
		log.Fatal("Missing POSTGRES_URL variable")
	}
	if config.Secret == "" {
		log.Fatal("Missing SECRET variable")
	}

	return config
}
