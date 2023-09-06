use config::{Config, File};
use lazy_static::lazy_static;
use std::{net::SocketAddr, sync::Once};

pub struct AppConfig {
    pub socket_address: SocketAddr,
    pub postgres_url: String,
    pub redis_url: String,
    pub secret: Vec<u8>,
}

static INIT: Once = Once::new();

pub fn load_config() -> Result<AppConfig, Box<dyn std::error::Error>> {
    // Initialize the configuration
    let config = Config::builder()
        .add_source(File::with_name("Settings"))
        .build()?;

    let host: String = config.get("host")?;
    let port: u16 = config.get("port")?;
    let socket_address = format!("{}:{}", host, port).parse()?;

    let postgres_url: String = if cfg!(test) {
        config.get("test_postgres_url")?
    } else {
        config.get("postgres_url")?
    };
    let redis_url: String = if cfg!(test) {
        config.get("test_redis_url")?
    } else {
        config.get("redis_url")?
    };

    // Secret for sessions
    let secret_str: String = config.get("secret")?;
    if secret_str.len() < 64 {
        return Err("Secret must be at least 64 bytes long".into());
    }
    let secret: Vec<u8> = secret_str.as_bytes().to_vec();

    Ok(AppConfig {
        socket_address,
        postgres_url,
        redis_url,
        secret,
    })
}

lazy_static! {
    static ref CONFIG: AppConfig = {
        let mut config_opt: Option<AppConfig> = None;

        INIT.call_once(|| match load_config() {
            Ok(config) => config_opt = Some(config),
            Err(err) => tracing::error!("Failed to load config: {}", err),
        });

        config_opt.expect("Config file (`Settings.toml`) must exist and config must be initialized")
    };
}

pub fn get_config() -> &'static AppConfig {
    &CONFIG
}
