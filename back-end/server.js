// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();

const PORT = process.env.PORT || 3333;

// LISTEN
app.listen(PORT, () => {
  console.log(`🔥 🌶️  Things are getting spicy on port ${PORT} 🌶️  🔥 `);
});
