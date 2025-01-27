const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: [
      "https://api-development-ca.onrender.com",
      "https://api-development-ca-1.onrender.com/",
    ],
  })
);
app.use(bodyParser.json());

app.post("/api/users", (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ error: "Name and description are required" });
  }
  const query = "INSERT INTO users (name, description) VALUES (?, ?)";
  db.run(query, [name, description], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, name, description });
  });
});

app.post("/api/posts", (req, res) => {
  const { name, user_id } = req.body;
  if (!name || !user_id) {
    return res.status(400).json({ error: "Name and user_id are required" });
  }

  const query = "INSERT INTO posts (name, user_id) VALUES (?, ?)";
  db.run(query, [name, user_id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, name, user_id });
  });
});

app.get("/api/posts", (req, res) => {
  const query = `
    SELECT posts.id AS post_id, posts.name AS post_name, posts.user_id, users.name AS user_name, users.description AS user_description
    FROM posts
    JOIN users ON posts.user_id = users.id;
  `;

  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.get("/api/posts/user/:user_id", (req, res) => {
  const userId = req.params.user_id;

  const query = `
    SELECT posts.id AS post_id, posts.name AS post_name, posts.user_id, 
    users.name AS user_name, users.description AS user_description
    FROM posts
    JOIN users ON posts.user_id = users.id
    WHERE posts.user_id = ?;
  `;

  db.all(query, [userId], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (rows.length === 0) {
      return res.status(404).json({ error: "No posts found for this user." });
    }

    res.json(rows);
  });
});

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

app.delete("/api/posts/:id", (req, res) => {
  const postId = req.params.id;

  const query = "DELETE FROM posts WHERE id = ?";
  db.run(query, [postId], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json({ message: "Post deleted successfully" });
  });
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on https://api-development-ca.onrender.com`);
});
