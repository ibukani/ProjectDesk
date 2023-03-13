-- Your SQL goes here
CREATE TABLE projects (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  description TEXT,
  created_at TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime')),
  updated_at TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime'))
);

CREATE TRIGGER trigger_projects_updated_at AFTER UPDATE ON projects
BEGIN
  UPDATE projects SET updated_at = DATETIME('now', 'localtime') WHERE rowid = NEW.rowid;
END;
