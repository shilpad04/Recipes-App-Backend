const Recipe = require('../models/Recipe');

// -----------------------------
// Create a new recipe
// POST /api/recipes
// -----------------------------
exports.createRecipe = async (req, res) => {
  try {
    const {
      title,
      description,
      ingredients,
      steps,
      prepTimeMinutes,
      cookTimeMinutes,
      servings
    } = req.body;

    const newRecipe = new Recipe({
      title,
      description,
      ingredients,
      steps,
      prepTimeMinutes,
      cookTimeMinutes,
      servings
    });

    const savedRecipe = await newRecipe.save();

    res.status(201).json({
      success: true,
      message: "Recipe created successfully",
      data: savedRecipe
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



// -----------------------------
// Get ALL recipes
// GET /api/recipes
// -----------------------------
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();

    res.json({
      success: true,
      data: recipes
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



// -----------------------------
// Get recipe by ID
// GET /api/recipes/:id
// -----------------------------
exports.getRecipeById = async (req, res) => {
  try {
    const recipeId = req.params.id;

    const recipe = await Recipe.findById(recipeId);

    if (!recipe) {
      return res.status(404).json({
        success: false,
        message: "Recipe not found"
      });
    }

    res.json({
      success: true,
      data: recipe
    });

  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        message: "Invalid recipe ID"
      });
    }

    res.status(500).json({ success: false, message: error.message });
  }
};



// -----------------------------
// Update recipe by ID
// PUT /api/recipes/:id
// -----------------------------
exports.updateRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;    // FIXED
    const updatedData = req.body;

    const updatedRecipe = await Recipe.findByIdAndUpdate(
      recipeId,
      updatedData,
      { new: true, runValidators: true }
    );

    if (!updatedRecipe) {
      return res.status(404).json({
        success: false,
        message: "Recipe not found"
      });
    }

    res.json({
      success: true,
      message: "Recipe updated successfully",
      data: updatedRecipe
    });

  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        message: "Invalid recipe ID"
      });
    }

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};



// -----------------------------
// Delete recipe by ID
// DELETE /api/recipes/:id
// -----------------------------
exports.deleteRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;

    const deletedRecipe = await Recipe.findByIdAndDelete(recipeId);

    if (!deletedRecipe) {
      return res.status(404).json({
        success: false,
        message: "Recipe not found"
      });
    }

    res.json({
      success: true,
      message: "Recipe deleted successfully"
    });

  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        message: "Invalid recipe ID"
      });
    }

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
