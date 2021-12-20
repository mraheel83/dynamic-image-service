/**
 * Required External Modules
 */
const express = require("express");
const axios = require("axios");

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";

/**
 * Routes Definitions
 */
app.get("/", async (req, res) => {
  const image = await axios("https://source.unsplash.com/random");
  res.send(`<img src="${image.request.res.responseUrl}"/>`);
});

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listing app on http://localhost:${port}`);
});