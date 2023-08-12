use config::Config;
use lazy_static::lazy_static;
use std::net::SocketAddr;

pub struct AppConfig {
    pub socket_address: SocketAddr,
    pub postgres_url: String,
    pub redis_url: String,
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
        let postgres_user: String = config.get("postgres_user").unwrap();
        let postgres_password: String = config.get("postgres_password").unwrap();
        let postgres_db: String = config.get("postgres_db").unwrap();
        let redis_url: String = config.get("redis_url").unwrap();

        AppConfig {
            socket_address: format!("{}:{}", host, port).parse().expect("Invalid socket address"),
            postgres_url: format!("postgresql://{}:{}@localhost:5432/{}", postgres_user, postgres_password, postgres_db).parse().expect("Invalid PostgreSQL url"),
            redis_url: redis_url.to_string(),
        }
    };
}

pub fn get_config() -> &'static AppConfig {
    &CONFIG
}
