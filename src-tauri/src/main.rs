#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod database;
mod project_store;

// Main running
fn main() {
    // initialise database
    database::initialize_database();

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            project_store::get_projects,
            project_store::add_project,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
