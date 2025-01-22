const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post("/api/items", (req, res) => {
  const { name, description } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  const query = "INSERT INTO items (name, description) VALUES (?, ?)";
  db.run(query, [name, description], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, name, description });
  });
});

app.get("/api/items", (req, res) => {
  const query = "SELECT * FROM items";
  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.get("/api/posts", (req, res) => {
  const query = `
      SELECT posts.id AS post_id, posts.name AS post_name, posts.user_id, posts.title, users.name AS user_name, users.description AS user_description
      FROM posts
      JOIN users ON posts.user_id = users.id
    `;

  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
