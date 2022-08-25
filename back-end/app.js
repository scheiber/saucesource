// Dependencies
const express = require("express");
const cors = require("cors");
const saucesController = require("./controllers/saucesController.js");

// Config
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/sauces", saucesController);

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
