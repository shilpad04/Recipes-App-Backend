require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const recipeRoutes = require("./routes/recipeRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Connect DB
connectDB();

// Body parser
app.use(express.json());

// Routes
app.use("/api/recipes", recipeRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
