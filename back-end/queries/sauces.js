const db = require("../db/dbConfig.js");

const getAllSauces = async () => {
  try {
    return await db.any("SELECT * FROM sauces");
  } catch (error) {
    return error;
  }
};

const getSingleSauce = async (id) => {
  try {
    return await db.one("SELECT * FROM sauces WHERE id=$1", id);
  } catch (error) {
    return error;
  }
};

const createSauce = async (sauce) => {
  try {
    return await db.one(
      "INSERT INTO sauces (name, description, scoville, is_organic, is_kosher, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        sauce.name,
        sauce.description,
        sauce.scoville,
        sauce.is_organic,
        sauce.is_kosher,
        sauce.image,
      ]
    );
  } catch (error) {
    return error;
  }
};

const updateSauce = async (id, sauce) => {
  try {
    return await db.one(
      "UPDATE sauces SET name=$1, description=$2, scoville=$3, is_organic=$4, is_kosher=$5, image=$6 WHERE id=$7 RETURNING *",
      [
        sauce.name,
        sauce.description,
        sauce.scoville,
        sauce.is_organic,
        sauce.is_kosher,
        sauce.image,
        id,
      ]
    );
  } catch (error) {
    return error;
  }
};

const deleteSauce = async (id) => {
  try {
    return await db.one("DELETE FROM sauces WHERE id=$1 RETURNING *", id);
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSauces,
  getSingleSauce,
  createSauce,
  updateSauce,
  deleteSauce,
};
