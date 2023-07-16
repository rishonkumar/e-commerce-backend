const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected "))
  .catch((err) => console.log(err));

const app = express();

app.listen(5000, () => {
  console.log("Server is running at 5000");
});
