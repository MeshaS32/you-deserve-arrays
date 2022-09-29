const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt(`PLease enter your array: `))

let str = [ "I", "am", "Blessed"]
console.log(str)

let lastArrayIten = str[2]
console.log(` The 1st item in this array is:  ${lastArrayIten}`)