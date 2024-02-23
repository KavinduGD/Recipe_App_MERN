const Recipe = require("../models/recipeModel");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const { fileSizeFormatter } = require("../config/fileUpload");
//get All Recipes
const GetAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Add a new recipe
const addRecipe = async (req, res) => {
  try {
    const { id, name, ingredients, description } = req.body;

    console.log(ingredients);

    if (!id || !name || !ingredients || !description || !req.file) {
      fs.unlinkSync(req.file.path);
      return res.status(400).json({ message: "All fields are required" });
    }

    if (req.file) {
      try {
        uploadedFile = await cloudinary.uploader.upload(req.file.path, {
          folder: "Recipe/",
          resource_type: "image",
        });
      } catch (err) {
        res.status(500);
        throw new Error("Image could not be uploaded");
      }

      fileData = {
        filePath: uploadedFile.secure_url,
        fileID: uploadedFile.public_id,
      };

      fs.unlinkSync(req.file.path);
      console.log(fileData);
    }

    console.log(req.file);

    const recipe = new Recipe({
      id,
      name,
      ingredients,
      description,
      image: fileData,
    });
    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Edit a recipe
const editRecipe = async (req, res) => {
  const { id } = req.params;
  let recipe;

  try {
    recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  try {
    let { name, ingredients, description } = req.body;
    let fileData = {};
    if (req.file) {
      try {
        uploadedFile = await cloudinary.uploader.upload(req.file.path, {
          folder: "Recipe/",
          resource_type: "image",
        });

        //destroy the previous image
        await cloudinary.uploader.destroy(recipe.image.fileID);
      } catch (err) {
        res.status(500);
        throw new Error("Image could not be uploaded");
      }

      fileData = {
        filePath: uploadedFile.secure_url,
        fileID: uploadedFile.public_id,
      };

      fs.unlinkSync(req.file.path);
    }
    const rid = recipe.id;
    name = name ? name : recipe.name;
    ingredients = ingredients ? ingredients : recipe.ingredients;
    description = description ? description : recipe.description;
    fileData = Object.keys(fileData).length === 0 ? recipe.image : fileData;

    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id,
      {
        id: rid,
        name,
        ingredients,
        description,
        image: fileData,
      },
      { new: true }
    );
    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Delete a recipe
const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  let recipe;
  try {
    recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  try {
    await cloudinary.uploader.destroy(recipe.image.fileID);
    await Recipe.findByIdAndDelete(id);
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { GetAllRecipes, addRecipe, editRecipe, deleteRecipe };
