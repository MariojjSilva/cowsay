const information = require("./information.js");
const cowsay = require("cowsay");
console.log(
  cowsay.say({
    text: `Hello my name is ${information.wilderName} and I'm ${information.wilderCampus} years old!`,
    e: "oO",
    T: "U",
  })
);
