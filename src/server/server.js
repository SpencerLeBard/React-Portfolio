require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcrypt"); // For password hashing
const jwt = require("jsonwebtoken"); // For generating JWTs
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Middleware to parse JSON

// Secret key for JWT (store this in environment variables in production)
const secretKey = "your_secret_key";
//const secretKey = process.env.JWT_SECRET;
console.log("********************** secret key " + secretKey);

// MySQL connection setup
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "spencer47",
  database: "BlogDB",
});

//NOTE : HIT POSTMAN: http://localhost:5000/api/login
// {
// "username": "Admin"
// "password": "spencer47"
// }

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

// User Registration Route
app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the users table
    db.query(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [username, hashedPassword],
      (err, result) => {
        if (err) {
          if (err.code === "ER_DUP_ENTRY") {
            return res.status(409).json({ error: "Username already exists" });
          }
          return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: "User registered successfully!" });
      }
    );
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
});

// Login Route
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  // Query the database for the user
  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    async (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0)
        return res.status(401).json({ error: "Invalid credentials" });

      const user = results[0];

      // Compare the password with the hashed password in the database
      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(401).json({ error: "Invalid credentials" });

      // Generate a JWT token
      const token = jwt.sign(
        { id: user.id, username: user.username },
        secretKey,
        { expiresIn: "1h" }
      );

      res.json({ message: "Login successful", token });
    }
  );
});
//ANCHOR BLOG ROUTES BELOW ************************************
// Route to get all blogs for BlogList component or Postman
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
  const sql = `SELECT * FROM blogs WHERE id = ?`;
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    res.json(result[0]);
  });
});

// Route for creating a new blog post
app.post("/api/blogs", (req, res) => {
  const { title, date, author, content } = req.body;
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
  console.log(`Connection Successful: Server running on port ${port} ... `);
});
