const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  ingredients: {
    type: Array,  
    default: []
  },

  steps: {
    type: Array,
    default: []
  },

  prepTimeMinutes: {
    type: Number
  },

  cookTimeMinutes: {
    type: Number
  },

  servings: {
    type: Number,
    default: 1
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Recipe", recipeSchema);
