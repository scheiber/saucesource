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
    `<style>
    body {color: white; background:black;}
    a {color: orange;}
    h1 {text-align:center; font-family: 'Helvetica', 'Arial', sans-serif; margin: 0px;}
    .flame {font-size: 100px;}
    </style>
    <h1 class="flame">🔥</h1>
    <h1>Welcome to the <a href="https://saucesource.scheiber.dev/">SauceSource</a> Backend!</h1>
    <p style="text-align:center; font-family: 'Helvetica', 'Arial', sans-serif;"><a href="https://github.com/Scheiber/saucesource">Find out more.</a></p>`
  );
});

// Error
app.get("*", (req, res) => {
  res.status(404).json({ error: "Error 404: Not Found" });
});

// Export
module.exports = app;
