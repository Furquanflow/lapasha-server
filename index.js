const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./router/Router");
const path = require("path");

require("dotenv").config();
const app = express();
app.use(express.json());
const _dirName = path.dirname("");
const buildPath = path.join(_dirName, "../lapashaform/build");
app.use(express.static(buildPath));
app.use(
  cors({
    origin: "*"
  })
);
const PORT = process.env.port;
app.use(routes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Port Running at ${PORT}`));
