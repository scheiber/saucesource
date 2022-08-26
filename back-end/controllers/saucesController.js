const express = require("express");
const sauces = express.Router();
const { getAllSauces, getSingleSauce } = require("../queries/sauces.js");

// Get all sauces
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

// Get single sauce
sauces.get("/:id", async (req, res) => {
  const { id } = req.params;

  const sauce = await getSingleSauce(id);
  console.log(sauces);

  if (sauce.id) {
    res.status(200).json({
      success: true,
      payload: sauce,
    });
  } else {
    res.status(404).json({ success: false, payload: "not found" });
  }
});

// Export
module.exports = sauces;
