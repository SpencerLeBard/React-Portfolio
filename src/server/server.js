const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// MySQL connection setup
const db = mysql.createConnection({
  host: "localhost", // The host where your MySQL server is running
  user: "root", // Your MySQL username
  password: "spencer47", // Your MySQL password, leave blank if none
  database: "BlogDB", // The name of the database you created
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// Route to get all blogs
app.get("/blogs", (req, res) => {
  const sql = "SELECT * FROM blogs";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result); // Send the result as JSON
  });
});

// Route to get a single blog by ID
app.get("/blogs/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM blogs WHERE id = ${id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result[0]); // Send the first result as JSON
  });
});

// Start the server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
