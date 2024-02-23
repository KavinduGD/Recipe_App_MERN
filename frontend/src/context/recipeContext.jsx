import { createContext } from "react";
import recipeAxios from "../baseUrl";
import { useEffect } from "react";
import { useReducer } from "react";

export const RecipeContext = createContext();

export const recipeReducer = (state, action) => {
  switch (action.type) {
    case "SET_RECIPES":
      return { recipes: action.payload };
    case "ADD_RECIPE":
      return { recipes: [...state.recipes, action.payload] };
    case "DELETE_RECIPE":
      return {
        recipes: state.recipes.filter(
          (recipe) => recipe._id !== action.payload
        ),
      };
    case "UPDATE_RECIPE":
      console.log(action.payload);
      return {
        recipes: state.recipes.map((recipe) =>
          recipe._id === action.payload._id ? action.payload : recipe
        ),
      };
    // return state.recipes.map((recipe) =>
    //   recipe._id === action.payload._id ? action.payload : recipe
    // );
    default:
      return state;
  }
};

export const RecipeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipeReducer, { recipes: [] });

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const res = await recipeAxios.get("/api/recipes/");
        dispatch({ type: "SET_RECIPES", payload: res.data });
      } catch (error) {
        console.log(error);
      }
    };
    getRecipes();
  }, []);

  console.log(state);
  return (
    <RecipeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};
