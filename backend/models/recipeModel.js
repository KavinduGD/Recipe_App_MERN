const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Array,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },
});

const recipeModel = mongoose.model("Recipe", recipeSchema);

module.exports = recipeModel;
