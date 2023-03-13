use serde::{Deserialize, Serialize};
use tauri;

#[derive(Debug, Deserialize, Serialize)]
pub struct Project {
    name: String,
    location: String,
    description: String,
}

#[tauri::command]
pub fn get_projects() -> Result<Vec<Project>, String> {
    let projects = vec![Project {
        name: "test_name".to_string(),
        location: "test_location".to_string(),
        description: "test_description".to_string(),
    }];
    Ok(projects)
}

#[tauri::command]
pub fn add_project(project: Project) -> Result<(), String> {
    Ok(())
}
