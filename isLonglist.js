const prompt = require('prompt-sync')({sigint: true});


let userArray = JSON.parse(prompt(`PLease enter your array: `))
console.log(userArray)

userArraylength = userArray.length
console.log(userArraylength)

Boolean1 = true
Boolean2 = false

if(userArraylength > 10){
    console.log(true)
} else if(userArraylength <= 10){
    console.log(false)
}

