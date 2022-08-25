// Dependencies
const express = require("express");
const cors = require("cors");

// Config
const app = express();

// Middleware to enable CORS on server
app.use(cors());

// Middleware that turns JSON into usable JS
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send(
    `<h1 style="text-align:center; font-size:100px; margin: 0px;">🔥</h1>
    <h1 style="text-align:center; font-family: 'Helvetica', 'Arial', sans-serif; margin: 0px;">Welcome to the <a href="https://saucesource.netlify.app">Sauce Source</a> Backend!</h1>
    <p style="text-align:center; font-family: 'Helvetica', 'Arial', sans-serif;"><a href="https://github.com/Scheiber/saucesource">Find out more.</a><p/>`
  );
});

// Error
app.get("*", (req, res) => {
  res.status(404).json({ error: "Error 404: Not Found" });
});

// Export
module.exports = app;
