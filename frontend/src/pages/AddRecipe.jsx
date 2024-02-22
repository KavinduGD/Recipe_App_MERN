import React, { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import recipeAxios from "../baseUrl";

function AddRecipe() {
  const [recipeImage, setRecipeImage] = useState();
  const [Ingredients, setIngredients] = useState([]);
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientAmount, setIngredientAmount] = useState("");

  const createRecipe = async () => {
    console.log("createRecipe");
    const recipeName = document.getElementById("recipeName").value;
    const recipeDes = document.getElementById("recipeDes").value;
    const formData = new FormData();
    formData.append("id", 3);
    formData.append("name", recipeName);
    formData.append("description", recipeDes);
    formData.append("ingredients", JSON.stringify(Ingredients));
    formData.append("image", recipeImage);
    const res = await recipeAxios.post("/api/recipes/", formData);
  };

  return (
    <div className="flex flex-col font-roboto ">
      <p className="text-[40px] font-crimsonPro font-medium flex justify-center sm:justify-start">
        Add Your Recipe
      </p>
      <div className="flex flex-col sm:flex-row  gap-[30px]">
        <div className="flex justify-center sm:justify-start">
          <div className="w-[90%] sm:w-[400px]">
            <label htmlFor="recipeImage" className="w-full">
              <div
                className={`${
                  recipeImage
                    ? "border-[1px] border-solid rounded-[6px] border-gray-300"
                    : "border-2 border-dashed rounded-[8px] border-[#3D2D30]"
                }  h-[350px]  flex items-center justify-center overflow-hidden px-3 py-3`}
              >
                {recipeImage ? (
                  <img
                    src={URL.createObjectURL(recipeImage)}
                    alt="recipe image"
                    className="w-full h-full object-cover  "
                  />
                ) : (
                  <div className="flex flex-col items-center font-roboto">
                    <MdCloudUpload className="text-[42px] text-[#3D2D30]" />
                    <p className="text-gray-800 text-[20px] font-semibold">
                      Click here to upload the image
                    </p>
                    <p className="text-[14px]">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                )}
              </div>
            </label>
            <div className="h-[40px] bg-[#3D2D30] flex mt-[5px] rounded-lg items-center  justify-between px-[20px]">
              <label htmlFor="recipeImage">
                <FaImage className="text-[17px] text-white" />
              </label>
              <RiDeleteBin5Fill
                className="text-[17px] text-white"
                onClick={() => {
                  setRecipeImage(null);
                }}
              />
            </div>
            <input
              type="file"
              name="recipeImage"
              id="recipeImage"
              className="hidden"
              onChange={(e) => {
                setRecipeImage(e.target.files[0]);
              }}
            />
          </div>
        </div>

        <div className="flex-1 px-[5%] sm:px-0">
          <div>
            <label htmlFor="recipeName">
              <p className="font-semibold">Food Name</p>
            </label>
            <input
              type="text"
              id="recipeName"
              placeholder="Recipe Name"
              className="w-full h-[50px] border-2 border-solid border-gray-300 rounded-[6px] px-[10px] focus:outline-none "
            />
          </div>
          <div>
            <label htmlFor="recipeName">
              <p className="font-semibold">Ingredients</p>
            </label>
            {Ingredients &&
              Ingredients.map((ingredient) => (
                <div
                  className="flex mb-[10px] justify-between"
                  key={ingredient.name}
                >
                  <div className="flex">
                    <p>{ingredient.name}</p>
                    <p>-</p>
                    <p>{ingredient.amount}</p>
                  </div>
                  <button
                    className="bg-[#3D2D30] text-white"
                    onClick={() => {
                      setIngredients((prev) => {
                        return prev.filter(
                          (item) => item.name !== ingredient.name
                        );
                      });
                    }}
                  >
                    minus
                  </button>
                </div>
              ))}
            <div className="flex gap-[10px]">
              <input
                type="text"
                id="recipeName"
                placeholder="Ingredien Name"
                className="w-[60%] h-[50px] border-2 border-solid border-gray-300 rounded-[6px] px-[10px] focus:outline-none "
                onChange={(e) => {
                  setIngredientName(e.target.value);
                }}
                value={ingredientName}
              />
              <input
                type="text"
                id="recipeName"
                placeholder="Amount"
                className="w-[40%] h-[50px] border-2 border-solid border-gray-300 rounded-[6px] px-[10px] focus:outline-none "
                onChange={(e) => {
                  setIngredientAmount(e.target.value);
                }}
                value={ingredientAmount}
              />
            </div>
            <div>
              <button
                className="px-[20px] bg-[#3D2D30] text-white"
                onClick={() => {
                  setIngredients((prev) => {
                    console.log(prev);
                    return [
                      ...prev,
                      { name: ingredientName, amount: ingredientAmount },
                    ];
                  });
                  setIngredientAmount("");
                  setIngredientName("");
                }}
              >
                +
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="recipeDes">
              <p className="font-semibold">Instructions</p>
            </label>
            <textarea
              name="recipeDes"
              id="recipeDes"
              placeholder="Description"
              className="w-full h-[167px] border-2 border-solid border-gray-300 rounded-[6px] px-[10px] focus:outline-none "
            ></textarea>
          </div>
        </div>
      </div>
      <div className="flex   justify-center sm:justify-end px-[5%] sm:px-0 ">
        <button
          className="text-white bg-[#3D2D30] w-[100%]  sm:w-[200px] "
          onClick={createRecipe}
        >
          Add Recipe
        </button>
      </div>
    </div>
  );
}

export default AddRecipe;
