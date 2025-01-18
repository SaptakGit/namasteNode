console.log("Sum Module Executed");

var x = "Hello Var"; 

function calculateSum(a,b){  
    const sum = a + b;
    console.log(sum);
}


module.exports = { x, calculateSum }; 