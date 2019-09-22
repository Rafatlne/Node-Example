const express = require("express");
const path = require("path");
const fs = require('fs');

let quotes = JSON.parse(fs.readFileSync('./quotes.json'));

const complements = quotes['compliments'];
const insults = quotes['insults'];

let getRandomComplement = () => {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return complements[randomIndex];
}

let getRandomInsult = () => {
  const randomIndex = Math.floor(Math.random() * insults.length);
  return insults[randomIndex].toLocaleLowerCase();
}

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function(req, res) {
  res
    .json({
      complement: getRandomComplement()
    })
    .end();
});

app.get("/insult", function(req, res) {
  res
    .json({
      insult: getRandomInsult()
    })
    .end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");