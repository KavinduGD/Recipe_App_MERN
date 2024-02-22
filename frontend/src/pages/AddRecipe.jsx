import React, { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
function AddRecipe() {
  const [recipeImage, setRecipeImage] = useState();
  return (
    <div className="flex flex-col ">
      <p className="text-[40px] font-crimsonPro font-medium flex justify-center sm:justify-start">
        Add Your Recipe
      </p>
      <div className="flex flex-col sm:flex-row items-stretch ">
        <div className="flex justify-center sm:justify-start">
          <div className="w-[90%] sm:w-[400px]">
            <label htmlFor="recipeImage" className="w-full">
              <div
                className={`${
                  recipeImage
                    ? "border-[1px] border-solid rounded-[6px] border-gray-300"
                    : "border-2 border-dashed rounded-[8px] border-[#3D2D30]"
                }  h-[300px]  flex items-center justify-center overflow-hidden px-3 py-3`}
              >
                {recipeImage ? (
                  <img
                    src={URL.createObjectURL(recipeImage)}
                    alt="recipe image"
                    className="w-full h-full object-fill "
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

        <div className="flex-1">form</div>
      </div>
    </div>
  );
}

export default AddRecipe;
