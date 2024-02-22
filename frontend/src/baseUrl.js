import axios from "axios";

const recipeAxios = axios.create({
  baseURL: "http://localhost:3000",
});

export default recipeAxios;
