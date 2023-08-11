# Dockerfile
FROM rust:1.67 AS builder

WORKDIR /usr/src/app
COPY . .

RUN cargo install --path .

# Use a non-root user
RUN useradd -m myuser

# Change ownership of the working directory
RUN chown -R myuser:myuser /usr/src/app

# Switch to the non-root user
USER myuser

FROM debian:buster-slim

# Copy the binary from the builder
COPY --from=builder --chown=myuser:myuser /usr/local/cargo/bin/app /usr/local/bin/app

# Health check (adjust the endpoint as needed)
HEALTHCHECK CMD curl --fail http://localhost:3000/ || exit 1

CMD ["app"]