const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./router/Router");

require("dotenv").config();
const app = express();
app.use(cors());
const PORT = process.env.port;
app.use(express.json());
app.use(routes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Port Running at ${PORT}`));