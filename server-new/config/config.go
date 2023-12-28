package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
    Host string
    Port string
}

func LoadConfig() Config {
    err := godotenv.Load()
    if err != nil {
        log.Fatal("Error loading .env file", err)
    }

    config := Config {
        Host: os.Getenv("HOST"),
        Port: os.Getenv("PORT"),
    }

    if config.Host == "" {
        log.Fatal("Missing HOST variable")
    }
    if config.Port == "" {
        log.Fatal("Missing PORT variable")
    }

    return config
}