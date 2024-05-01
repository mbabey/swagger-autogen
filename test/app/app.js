import express from "express";

const app = express();

app.get("/", (req, res) => {
/*
  #swagger.summary = 'Home Route'
  #swagger.description = 'Send a simple message on the root path.'
  #swagger.operationId = 'homeRoute'
  #swagger.x-api-pattern = 'GetText'
*/
  res.status(200).send("Test Application");
});

app.listen("8080", () => {
  console.log("Swagger test app on port 8080")
});