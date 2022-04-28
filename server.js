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

app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/Fundamentals/KYM.html", function (req, res) {
  res.sendFile(__dirname + "/Fundamentals/KYM.html");
});

app.get("/Fundamentals/ComputerLang.html", function (req, res) {
  res.sendFile(__dirname + "/Fundamentals/ComputerLang.html");
});

app.get("/Fundamentals/Compiler.html", function (req, res) {
  res.sendFile(__dirname + "/Fundamentals/Compiler.html");
});

app.get("/Fundamentals/HelloWorld.html", function (req, res) {
  res.sendFile(__dirname + "/Fundamentals/HelloWorld.html");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server Started at port 3000!!!");
});
