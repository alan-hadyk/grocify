use std::net::{SocketAddr, IpAddr};
use lazy_static::lazy_static;
use std::env;
use dotenv::dotenv;

pub struct Config {
    pub socket_address: SocketAddr,
}

lazy_static! {
    static ref CONFIG: Config = {
        // Load environment variables from .env file
        dotenv().ok();

        let host = env::var("HOST").unwrap_or_else(|_| "127.0.0.1".to_string());
        let port_str = env::var("PORT").unwrap_or_else(|_| "3000".to_string());
        let port: u16 = port_str.parse().expect("PORT must be a number");

        let ip: IpAddr = host.parse().expect("Invalid IP address in HOST");

        Config {
            socket_address: SocketAddr::new(ip, port),
        }
    };
}

pub fn get_config() -> &'static Config {
    &CONFIG
}
