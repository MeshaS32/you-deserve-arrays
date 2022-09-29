const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Please enter an array: "));
console.log(userArray[0])


let x = (typeof 1)
let y = (typeof `a`)

console.log(typeof userArray[0] === x) && console.log(!typeof userArray[0] != x)

