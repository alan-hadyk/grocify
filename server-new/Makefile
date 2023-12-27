.PHONY: dev

dev:
	docker-compose -p grocify-server -f docker-compose.dev.yml up --build -d
	go run github.com/cosmtrek/air -c .air.toml