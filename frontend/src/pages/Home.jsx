import React from "react";
import { useRecipeContext } from "../hooks/useRecipeContext";

function Home() {
  const { recipes, dispatch } = useRecipeContext();

  console.log(recipes);
  return (
    <div className="mt-[20px] ">
      <div className="flex justify-between items-center px-[5px] sm:px-[0] mb-[10px]">
        <p className="font-crimsonPro  text-[23px] font-medium sm:text-[40px]">
          Manage Your Recipes
        </p>
        <button className="px-[20px] py-[10px] bg-[#373538] font-crimsonPro text-white">
          Add a Recipe
        </button>
      </div>
      <div className="sm:grid sm:grid-cols-4 gap-x-2 gap-y-4">
        {recipes &&
          recipes.map((recipe) => (
            <div className="sm rounded-md border-2 mb-[10px] sm:mb-0">
              <div>
                <div className="relative w-full pt-[100%]">
                  <img
                    src={recipe.image.filePath}
                    alt=""
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-t-sm"
                  />
                </div>
                <div className="flex flex-col px-[5px] pb-[10px]">
                  <p className="font-crimsonPro text-[35px] sm:text-[20px] ">
                    {recipe.name}
                  </p>
                  <div className="flex justify-between font-crimsonPro mt-2  pc-[10x]">
                    <button className="px-[35px] py-[8px] sm:px-[20px] sm:py-[5px] bg-[#373538] text-white text-[18px] sm:text-[16px]">
                      Edit
                    </button>
                    <button className=" px-[35px] py-[8px] sm:px-[20px] sm:py-[5px] bg-[#373538] text-white text-[18px] sm:text-[16px]">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
