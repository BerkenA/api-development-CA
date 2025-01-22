const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(":memory:");

db.run("PRAGMA foreign_keys = ON;");

db.serialize(() => {
  db.run(
    `CREATE TABLE users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT);`
  );
  db.run(
    `CREATE TABLE posts(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        user_id INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE);`
  );
});

module.exports = db;
