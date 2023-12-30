# Use a builder image
FROM golang:1.21.5 AS builder

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the local package files to the container's workspace.
COPY . .

# Build the Go app
RUN CGO_ENABLED=0 GOOS=linux go build -v -o app

# Use a small image for the final stage
FROM alpine:3.19

# Install CA certificates (in case you need HTTPS, e.g., for calling APIs) and add a non-root user
RUN apk --no-cache add ca-certificates=20230506-r0 && \
    adduser -D nonroot

# Switch to non-root user
USER nonroot

# Copy the binary from the builder
COPY --from=builder /usr/src/app/app /usr/local/bin/app

# Health check (adjust the endpoint as needed)
# Note: You might need to install curl in Alpine for this health check to work
HEALTHCHECK CMD wget --spider http://localhost:3000/query || exit 1

# Set the working directory to where the .env file is
WORKDIR /usr/src/app

# Command to run the executable
CMD ["app"]