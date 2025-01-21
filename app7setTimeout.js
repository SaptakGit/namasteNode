console.log("Hello World")

a = 255415478
b = 665248


// since it is an async function it only will be pushed to call stack in v8 once the call stack is empty. 
setTimeout(() => {
    console.log("call me Right Now")
},0); // Trust Issue with setTimeout

setTimeout(() => {
    console.log("call me after 2 second")
},2000);

function multiplication(a, b){
    let result = a * b
    return result
}

let c = multiplication(a, b)

console.log("The result of multiplication is: "+ c);