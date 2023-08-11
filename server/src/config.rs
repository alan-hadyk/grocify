use config::Config;
use lazy_static::lazy_static;
use std::net::SocketAddr;

pub struct AppConfig {
    pub socket_address: SocketAddr,
}

lazy_static! {
    static ref CONFIG: AppConfig = {
        // Initialize the configuration
        let config = Config::builder()
            .add_source(config::File::with_name("Settings"))
            .build()
            .unwrap();

        let host: String = config.get("host").unwrap();
        let port: u16 = config.get("port").unwrap();

        AppConfig {
            socket_address: format!("{}:{}", host, port).parse().expect("Invalid socket address")
        }
    };
}

pub fn get_config() -> &'static AppConfig {
    &CONFIG
}
