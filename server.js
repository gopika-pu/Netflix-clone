const express = require("express");
const cors = require("cors");

const app = express();

// Allow React app to access API
app.use(cors());

// Allow reading JSON from requests
app.use(express.json());

// Test API Route
app.get("/", (req, res) => {
  res.send("API is working!");
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});


let users = []; // Temporary memory (will reset when server restarts)

app.post("/signup", (req, res) => {
  const { email, password, name } = req.body;
  console.log("Credentials Received:", req.body);
  

  const userExists = users.find(u => u.email === email);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  users.push({ email, password, name});

  res.json({
    message: "Signup success",
    access_token: "dummy_token_123"
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Credentials Received:", req.body);

  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  if (user.password !== password) {
    return res.status(400).json({ message: "Incorrect password" });
  }

  res.json({
    message: "Login success",
    access_token: "dummy_token_123"
  });
});

