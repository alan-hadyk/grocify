use std::net::SocketAddr;

pub struct Config {
    pub socket_address: SocketAddr,
}

pub fn get_config() -> Config {
    Config {
        socket_address: SocketAddr::from(([127, 0, 0, 1], 3000)),
    }
}
