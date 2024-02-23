import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RecipeContextProvider } from "./context/recipeContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecipeContextProvider>
      <App />
      <ToastContainer />
    </RecipeContextProvider>
  </React.StrictMode>
);
