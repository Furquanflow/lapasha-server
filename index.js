const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./router/Router");
const bodyParser = require('body-parser');

require("dotenv").config();

const app = express();
const PORT = process.env.port;
app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.use(express.json());
app.use(cors());
app.use(routes);


mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Port Running at ${PORT}`));