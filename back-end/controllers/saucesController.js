const express = require("express");
const sauces = express.Router();
const {
  getAllSauces,
  getSingleSauce,
  createSauce,
  deleteSauce,
} = require("../queries/sauces.js");

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
    res.status(404).json({ success: false, payload: "Error 404: Not Found" });
  }
});

// Create sauce
sauces.post("/", async (req, res) => {
  const { body } = req;
  const createdSauce = await createSauce(body);

  if (createdSauce.id && !createdSauce.image) {
    res.status(200).json({
      success: true,
      payload: {
        id: createdSauce.id,
        name: createdSauce.name,
        description: createdSauce.description,
        scoville: createdSauce.scoville,
        is_organic: createdSauce.is_organic,
        is_kosher: createdSauce.is_kosher,
        image: "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image",
      },
    });
    return;
  }
  if (createdSauce.id) {
    res.status(200).json({
      success: true,
      payload: {
        id: createdSauce.id,
        name: createdSauce.name,
        description: createdSauce.description,
        scoville: createdSauce.scoville,
        is_organic: createdSauce.is_organic,
        is_kosher: createdSauce.is_kosher,
        image: createdSauce.image,
      },
    });
    return;
  }
  res.status(500).json({ error: "Sauce Creation Error" });
});

// Delete sauce
sauces.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSauce = await deleteSauce(id);
  if (deletedSauce.id) {
    res.status(200).json({ success: true, payload: deletedSauce });
  } else {
    res.status(404).json({ success: false, payload: { id: undefined } });
  }
});

// Export
module.exports = sauces;
