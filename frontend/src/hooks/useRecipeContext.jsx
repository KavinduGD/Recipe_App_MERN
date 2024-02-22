import { useContext } from "react";
import { RecipeContext } from "../context/recipeContext";

export const useRecipeContext = () => {
  const context = useContext(RecipeContext);

  if (!context) {
    throw new Error("User Context must be used within a UserContextProvider");
  }

  return context;
};
