import React, { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
function AddRecipe() {
  const [recipeImage, setRecipeImage] = useState();
  return (
    <div className="flex flex-col items-center sm:items-start">
      <p className="text-[40px] font-crimsonPro font-medium">Add Your Recipe</p>
      <div className="flex flex-col sm:flex-row ">
        <div>
          <div className="w-[400px]">
            <label htmlFor="recipeImage" className="w-fit">
              <div
                className={`${
                  recipeImage
                    ? "border-[1px] border-solid rounded-[6px] border-gray-300"
                    : "border-2 border-dashed rounded-[8px] border-main_blue"
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
                    <MdCloudUpload className="text-[42px] text-main_blue" />
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
        <div>form</div>
      </div>
    </div>
  );
}

export default AddRecipe;
