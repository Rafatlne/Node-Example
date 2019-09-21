const express = require("express");
const path = require("path");

const complements = [
  "You like nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];

const insults = [
  "YOU’RE A STREAM OF DICK JUICE AND IF I’M LUCKY YOU WILL CATCH EBOLA.",
  "YOU ARE A WETTER’S PECKER AND YOU DESERVE TO FUCK A DOG IN YOUR SLEEP.",
  "YOU ARE AN OBESE GRANDMOTHER’S CAMEL TOE AND I HOPE YOU WILL FINALLY BRUSH YOUR TEETH.",
  "YOU ARE CLEARLY A FUCKING IDIOT AND I REALLY HOPE YOU FALL DOWN AN OPEN MANHOLE.",
  "YOU’RE A HAIRY AXE-WOUND AND I'D PAY TO WATCH YOU SWALLOW A LEAKING AA BATTERY.",
  "YOU’RE AN ASSHAT AND I'D PAY TO WATCH YOU STAND UNDER A ROCKSLIDE.",
  "YOU ARE A COCK-WAFFLE AND YOU WILL HOPEFULLY STERILISE YOURSELF.",
  "YOU ARE A SHITCUNT AND I REALLY HOPE YOU HAVE YOUR CREDIT CARD STOLEN BY RUSSIANS.",
  "YOU ARE A CUNT AND IF I’M LUCKY YOU WILL REALISE HOW MUCH YOUR FAMILY DESPISES YOU."
]

function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return complements[randomIndex];
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

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");