const prompt = require('prompt-sync')({sigint: true});

let myArray = JSON.parse(prompt("Please enter an array: "));
console.log(myArray)

let thirdItem = myArray[2]
console.log(myArray[2])
console.log(thirdItem[1])

let x = "String"

if(myArray[2] === x){
    console.log("Second Character is a string")
} else if(myArray[2] != x){
    console.log("ERROR")
}