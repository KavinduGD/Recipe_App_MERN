const express = require("express");
const {
  GetAllRecipes,
  addRecipe,
  editRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");
const { upload } = require("../config/fileUpload");

const router = express.Router();

router.get("/", GetAllRecipes);
router.post("/", upload.single("image"), addRecipe);
router.patch("/:id", upload.single("image"), editRecipe);
router.delete("/:id", deleteRecipe);

module.exports = router;
