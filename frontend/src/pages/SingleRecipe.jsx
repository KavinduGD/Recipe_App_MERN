import React from "react";
import { useRecipeContext } from "../hooks/useRecipeContext";
import { useParams } from "react-router-dom";

function SingleRecipe() {
  const { recipes, dispatch } = useRecipeContext();
  const { id } = useParams();

  if (recipes && recipes.length != 0) {
    console.log(recipes.find((recipe) => recipe._id === id).ingredients);
  }
  return (
    <div className="mt-[10px] mb-[30px]">
      {recipes.length != 0 && (
        <div>
          <div className="flex  font-crimsonPro flex-col sm:justify-between sm:flex-row  items-center">
            <p className="text-[40px] font-semibold">
              {recipes.find((recipe) => recipe._id === id).name}
            </p>
            <p className="text-[30px] italic font-medium">
              Reicpe ID- {recipes.find((recipe) => recipe._id === id).id}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-[50px]">
            <div className="w-full sm:w-[400px] ">
              <img
                src={recipes.find((recipe) => recipe._id === id).image.filePath}
                alt={recipes.find((recipe) => recipe._id === id).name}
                className="w-full  h-[400px] object-cover"
              />
            </div>
            <div className="flex-1 font-crimsonPro  flex flex-col items-center sm:items-start ">
              <p className="text-[34px] font-medium text-center">Ingredients</p>
              <ol className="list-decimal  sm:ml-[15px] text-[18px]">
                {JSON.parse(
                  recipes.find((recipe) => recipe._id === id).ingredients
                ).map((ingredient) => (
                  <li key={ingredient.name} className="w-auto">
                    <div className="flex gap-[10px] ">
                      <p>{ingredient.name}</p>
                      <p>-</p>
                      <p>{ingredient.amount}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="mt-[20px]">
            <p className="font-crimsonPro px-[30px] sm:px-0">
              {recipes.find((recipe) => recipe._id == id).description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleRecipe;
