// deps
const express = require("express");
const mongoose = require("mongoose");

// globals
const app = express();
const PORT = process.env.PORT || 3001;
const CONNECTION_URL =
  "mongodb+srv://user:user@cluster0.0cow3.mongodb.net/devDB?retryWrites=true&w=majority";

// middles
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log("Mongoose Connected"),
      app.listen(PORT, () =>
        console.log(`Express Running on Port: http://localhost:${PORT}`)
      );
  })
  .catch((error) => console.log(`${error}`));