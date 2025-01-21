const crypto = require("crypto")

console.log("Hello World")

a = 255415478
b = 665248


// Password Base Key Derivative Function
// Sync Function - WILL BLOCK THE MAINTHREAD - DON'T USE IT
crypto.pbkdf2Sync('password','salt',5000000, 50, 'sha512')

// Async Function
crypto.pbkdf2('password','salt',5000000, 50, 'sha512', (err,key)=>{
    console.log("key Generated")
}); // It will only be called after the main thread is empty

function multiplication(a, b){
    let result = a * b
    return result
}

let c = multiplication(a, b)

console.log("The result of multiplication is: "+ c);