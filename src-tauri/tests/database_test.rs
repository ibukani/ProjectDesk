
#[cfg(test)]
mod tests {
    use diesel::{SqliteConnection, Connection};
    use dotenv::dotenv;
    use std::env;

    #[test]
    fn establish_connection() {
        dotenv().ok();

        let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
        SqliteConnection::establish(&database_url)
            .unwrap_or_else(|_| panic!("Error connecting to {}", database_url));
    }
}
