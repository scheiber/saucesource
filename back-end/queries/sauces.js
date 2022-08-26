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

module.exports = {
  getAllSauces,
  getSingleSauce,
};
