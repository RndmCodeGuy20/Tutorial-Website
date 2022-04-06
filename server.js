//jshint esversion:6

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/Fundamentals", function (req, res) {
  res.sendFile(__dirname + "/Fundamentals/KYM.html");
});

app.listen(3000, function () {
  console.log("Server Started at port 3000!!!");
});
