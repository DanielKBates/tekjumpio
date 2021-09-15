// deps
const express = require("express");
const mongoose = require("mongoose");

// imports 
const keys = require("./config/keys")

// globals
const app = express();
const PORT = process.env.PORT || 3001;

// middles
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(keys.mongoURI)
  .then(() => {
    console.log("Mongoose Connected"),
      app.listen(PORT, () =>
        console.log(`Express Running on Port: http://localhost:${PORT}`)
      );
  })
  .catch((error) => console.log(`${error}`));
