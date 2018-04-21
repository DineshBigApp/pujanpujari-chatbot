"use strict";

const express = require("express");
const bodyParser = require("body-parser");
// const dialogflow = require('./dialogflow');
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

  restService.get("/hi", function(req, res) {
      console.log("asfdasfd");
    return res.json({ fulfillmentText: "Bangalore, Tamil Nadu" });
  });

restService.post("/cities", function(req, res) {
  var speech =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters[0].echoText
      ? req.body.queryResult.parameters[0].echoText
      : "list cities.";
    return res.json({
        text: speech,
        text: "Bangalore, Chennai, Kerala",
        source: "pujaNpujari"
    });
});

restService.listen(process.env.PORT || 7000, function() {
  console.log("Server up and listening");
});