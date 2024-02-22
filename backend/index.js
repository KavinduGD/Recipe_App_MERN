const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
dotenv.config();
const cors = require("cors");
const connectDb = require("./config/dbConfig");
const recipeRoute = require("./routes/recipeRoute");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/recipes", recipeRoute);

app.listen(process.env.PORT, () => {
  connectDb();
  console.log(`Server running on port ${process.env.PORT}`);
});
