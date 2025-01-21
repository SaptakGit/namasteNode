const fs = require("fs")
const https = require("https")

console.log("Hello World")

a = 255415478
b = 665248

https.get('https://dummyjson.com/products/1' , (res) => {
    console.log("Fetched Data Successfully!")
});

setTimeout(()=>{
    console.log("setTimeout called after 2 seconds")
},2000);

//Sync Function
fs.readFileSync('./app7File.txt','utf8');

// Async Function
fs.readFile('./app7File.txt','utf8',(err,data)=>{
    console.log("File data: ", data)
});

function multiplication(a, b){
    let result = a * b
    return result
}

let c = multiplication(a, b);

console.log("The result of multiplication is: ", c);