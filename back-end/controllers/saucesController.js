const express = require("express");
const sauces = express.Router();
const { getAllSauces } = require("../queries/sauces.js");

// GET ALL SAUCES
sauces.get("/", async (req, res) => {
  const allSauces = await getAllSauces();
  if (allSauces[0]) {
    res.status(200).json({
      success: true,
      payload: allSauces,
    });
  } else {
    res.status(500).json({ error: "Error 500: Internal Server Error" });
  }
});

// EXPORT
module.exports = sauces;
