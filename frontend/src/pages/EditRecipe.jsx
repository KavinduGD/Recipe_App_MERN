import React, { useEffect, useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import recipeAxios from "../baseUrl";
import { CiCircleMinus } from "react-icons/ci";
import { CgAdd } from "react-icons/cg";
import { useRecipeContext } from "../hooks/useRecipeContext";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

function EditRecipe() {
  const { recipes, dispatch } = useRecipeContext();
  const { id } = useParams();

  const [recipeId, setRecipeId] = useState(0);
  const [recipeName, setRecipeName] = useState("");
  const [recipeImage, setRecipeImage] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientAmount, setIngredientAmount] = useState("");
  const [recipeDes, setRecipeDes] = useState("");

  const [imageChange, setImageChange] = useState(false);

  const [imageError, setImageError] = useState("");
  const [CompleteError, setCompleteError] = useState("");

  const createRecipe = async () => {
    if (!recipeName || !recipeImage || ingredients.length == 0 || !recipeDes) {
      toast.error("Please fill all the fields", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setCompleteError("Please fill all the fields");
      return;
    }
    setCompleteError("");

    if (
      imageChange &&
      recipeImage.type !== "image/png" &&
      recipeImage.type !== "image/jpg" &&
      recipeImage.type !== "image/jpeg"
    ) {
      toast.error("Valid Image Types JPG,JPEG,PNG", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setImageError("Valid Image Types JPG,JPEG,PNG");
      return;
    }

    setImageError("");

    const formData = new FormData();
    formData.append("id", recipeId);
    formData.append("name", recipeName);
    formData.append("description", recipeDes);
    formData.append("ingredients", JSON.stringify(ingredients));
    formData.append("image", recipeImage);

    console.log(formData);

    try {
      const res = await recipeAxios.patch(`/api/recipes/${id}`, formData);
      if (res.status === 200) {
        dispatch({ type: "UPDATE_RECIPE", payload: res.data });

        toast.success("Recipe aUpdated successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // setRecipeName("");
        // setRecipeImage(null);
        // setIngredients([]);
        // setRecipeDes("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (recipes && recipes.length != 0) {
      const recipe = recipes.find((recipe) => recipe._id === id);
      setRecipeId(recipe.id);
      setRecipeName(recipe.name);
      setRecipeDes(recipe.description);
      setIngredients(JSON.parse(recipe.ingredients));
      setRecipeImage(recipe.image.filePath);
    }
  }, [recipes]);

  return (
    <div className="flex flex-col font-roboto mt-[10px] mb-[20px]">
      <p className="text-[40px] font-crimsonPro font-medium flex justify-center sm:justify-start">
        Edit Recipe
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
                    src={
                      imageChange
                        ? URL.createObjectURL(recipeImage)
                        : recipeImage
                    }
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
            <div className="h-[40px] bg-[#3D2D30] flex mt-[5px]  items-center  justify-between px-[20px]">
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
            {imageError && (
              <p className="text-red-500 text-[14px]">{imageError}</p>
            )}
            <input
              type="file"
              name="recipeImage"
              id="recipeImage"
              className="hidden"
              onChange={(e) => {
                setRecipeImage(e.target.files[0]);
                setImageChange(true);
              }}
            />
          </div>
        </div>

        <div className="flex-1 px-[5%] sm:px-0">
          <div>
            <label htmlFor="recipeName">
              <p className="font-semibold text-[20px]">Food Name</p>
            </label>
            <input
              type="text"
              id="recipeName"
              placeholder="Recipe Name"
              className="w-full h-[50px] border-2 border-solid border-gray-300 rounded-[6px] px-[10px] focus:outline-none "
              value={recipeName}
              onChange={(e) => {
                setRecipeName(e.target.value);
              }}
            />
          </div>
          <div className="mt-[10px]">
            <label htmlFor="recipeName">
              <p className="font-semibold text-[20px]">Ingredients</p>
            </label>
            <ul
              className={`list-decimal pl-[40px] ${
                ingredients.length ? "mb-[5px]" : ""
              }`}
            >
              {ingredients.length != 0 &&
                ingredients.map((ingredient) => (
                  <li key={ingredient.name}>
                    <div className="flex  justify-between items-center">
                      <div className="flex gap-[30px] items-center">
                        <p className="font-roboto font-semibold text-gray-800 ">
                          {ingredient.name}
                        </p>
                        <p className="font-roboto font-semibold text-gray-800 text-[18px]">
                          -
                        </p>
                        <p className="font-roboto font-medium text-[14px] text-gray-600">
                          {ingredient.amount}
                        </p>
                      </div>
                      <button
                        className="bg-[#3D2D30] text-white px-[3px] py-[3px] rounded-full flex items-center justify-center "
                        onClick={() => {
                          setIngredients((prev) => {
                            return prev.filter(
                              (item) => item.name !== ingredient.name
                            );
                          });
                        }}
                      >
                        <CiCircleMinus
                          strokeWidth="1"
                          className="text-[14px]"
                        />
                      </button>
                    </div>
                  </li>
                ))}
            </ul>

            <div className="flex gap-[10px] ">
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
            <div className="flex justify-end mt-[5px]">
              <button
                className="px-[2px] py-[2px] rounded-full bg-[#3D2D30] text-white items-center justify-center flex"
                onClick={() => {
                  if (!ingredientName || !ingredientAmount) {
                    toast.error("Please complete ingredient details", {
                      position: "top-right",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                    return;
                  }
                  setIngredients((prev) => {
                    return [
                      ...prev,
                      { name: ingredientName, amount: ingredientAmount },
                    ];
                  });
                  setIngredientAmount("");
                  setIngredientName("");
                }}
              >
                <CgAdd />
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="recipeDes">
              <p className="font-semibold text-[20px]">Description</p>
            </label>
            <textarea
              name="recipeDes"
              id="recipeDes"
              placeholder="Description"
              className="w-full h-[167px] border-2 border-solid border-gray-300 rounded-[6px] px-[10px] focus:outline-none "
              value={recipeDes}
              onChange={(e) => {
                setRecipeDes(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
      </div>
      {CompleteError && (
        <p className="text-red-500 text-[14px] flex justify-end">
          {CompleteError}
        </p>
      )}
      <div className="flex   justify-center sm:justify-end px-[5%] sm:px-0 ">
        <button
          className="text-white bg-[#3D2D30] w-[100%]  sm:w-[200px] font-semibold py-[10px]"
          onClick={createRecipe}
        >
          Add Recipe
        </button>
      </div>
    </div>
  );
}

export default EditRecipe;
