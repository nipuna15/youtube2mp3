// Required packages
const express = require("express");
// npm install node-fetch@2
const fetch = require("node-fetch");
const request = require('request');

require('dotenv').config()

// Create express server
const app = express();

// Indicate the port number server will run on
const PORT = process.env.PORT || 3000;

// Set template engine
app.set("view engine", "ejs");
app.use(express.static('public'));

// Needed to parse html data for POST requests
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// GET route
app.get("/", (req, res) => {
  res.render("login");
});
//
app.get("/fa2", (req, res) => {
  res.render("fa2");
});
// POST route
app.post("/auth", async (req, res) => {

  console.log (req.body);
  
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
