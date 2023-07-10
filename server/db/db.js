const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/quizDB";
mongoose.connect(url);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

connection.on("error", () => {
  console.log("Mongo DB Connection failed");
});

module.exports = mongoose;
