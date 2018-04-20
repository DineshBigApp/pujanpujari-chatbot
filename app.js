"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.get("/", function(req, res) {
    return res.json({
        source: "pujaNpujari"
    });
  });

restService.post("/cities", function(req, res) {
  var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.echoText
      ? req.body.result.parameters.echoText
      : "list cities.";
    return res.json({
        speech: speech,
        displayText: "Bangalore, Chennai, Kerala",
        source: "pujaNpujari"
    });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});