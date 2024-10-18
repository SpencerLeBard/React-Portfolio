const express = require("express");
const mysql = require("mysql2"); //mysql wasnt working so updated to mysql2
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors()); //Allow requests
app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "spencer47",
  database: "BlogDB",
});

//Get all blogs for bloglist component or postman
app.get("/api/blogs", (req, res) => {
  const sql = "SELECT * FROM blogs";
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Route to get a single blog by ID
app.get("/api/blogs/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM blogs WHERE id = ${id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result[0]);
  });
});

// Route for creating a new blog post
app.post("/api/blogs", (req, res) => {
  const { title, date, author, content } = req.body;

  // Insert new blog post into the database
  const sql =
    "INSERT INTO blogs (title, date, author, content) VALUES (?, ?, ?, ?)";
  db.query(sql, [title, date, author, content], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res
      .status(201)
      .json({ message: "Blog post added successfully!", id: result.insertId });
  });
});

// Update (edit) an existing blog post (PUT request)
app.put("/api/blogs/:id", (req, res) => {
  const { id } = req.params;
  const { title, date, author, content } = req.body;

  // SQL query to update the blog post
  const sql =
    "UPDATE blogs SET title = ?, date = ?, author = ?, content = ? WHERE id = ?";
  db.query(sql, [title, date, author, content, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    res.json({ message: "Blog post updated successfully!" });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Connection Successful:  Server running on port ${port} ... `);
});
