struct Project {
    name: String,
    location: String,
    description: String
}

#[tauri::command]
pub fn get_projects() -> Result<> {

}
