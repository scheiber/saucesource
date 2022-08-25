const db = require("../db/dbConfig.js");

const getAllSauces = async () => {
  try {
    return await db.any("SELECT * FROM sauces");
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSauces,
};
