const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors()); //Allow requests
app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: "localhost",
  user: "root", //MySQL username
  password: "spencer47",
  database: "BlogDB",
});

//Get all blogs in bloglist component
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
    res.send(result[0]); // Send the first result as JSON
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
