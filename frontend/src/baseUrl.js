import axios from "axios";

const recipeAxios = axios.create({
  baseURL: "http://recipe-alb-370883967.us-east-1.elb.amazonaws.com:3000",
});

export default recipeAxios;
