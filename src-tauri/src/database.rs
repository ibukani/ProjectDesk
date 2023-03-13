use diesel::{Connection, SqliteConnection};
use dotenv::dotenv;
use std::env;

fn establish_connection() -> SqliteConnection {
    dotenv().ok();

    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    SqliteConnection::establish(&database_url)
        .unwrap_or_else(|_| panic!("Error connecting to {}", database_url))
}

pub fn initialize_database() -> Result<(), Box<dyn std::error::Error>> {
    let conn = establish_connection();

    Ok(())
}
