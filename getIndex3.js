const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt(`PLease enter your array: `))

let myArray = ["I","live", "in", "Floida"]
console.log(myArray[2])