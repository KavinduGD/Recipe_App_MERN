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
    <div>
      {recipes.length != 0 && (
        <div>
          <div className="flex  font-crimsonPro flex-col sm:justify-between items-center">
            <p className="text-[40px] font-semibold">
              {recipes.find((recipe) => recipe._id === id).name}
            </p>
            <p className="text-[30px] italic font-medium">
              Reicpe ID- {recipes.find((recipe) => recipe._id === id).id}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-[30px]">
            <div className="w-full sm:w-[400px] ">
              <img
                src={recipes.find((recipe) => recipe._id === id).image.filePath}
                alt={recipes.find((recipe) => recipe._id === id).name}
                className="w-full  h-[400px] object-cover"
              />
            </div>
            <div className="flex-1">
              <ol className="list-decimal ">
                {JSON.parse(
                  recipes.find((recipe) => recipe._id === id).ingredients
                ).map((ingredient) => (
                  <li key={ingredient.name}>
                    <div className="flex">
                      <p>{ingredient.name}</p>
                      <p>-</p>
                      <p>{ingredient.amount}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div>
            <p>{recipes.find((recipe) => recipe._id == id).description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleRecipe;
