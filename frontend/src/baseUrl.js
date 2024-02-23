import axios from "axios";

const recipeAxios = axios.create({
  baseURL: "https://recipe-app-mern-op0c.onrender.com",
});

export default recipeAxios;
