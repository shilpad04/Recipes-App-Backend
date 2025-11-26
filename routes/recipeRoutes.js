const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

// CREATE
router.post("/", recipeController.createRecipe);

// READ ALL
router.get("/", recipeController.getAllRecipes);

// READ ONE
router.get("/:id", recipeController.getRecipeById);

// UPDATE
router.put("/:id", recipeController.updateRecipe);

// DELETE
router.delete("/:id", recipeController.deleteRecipe);

module.exports = router;
