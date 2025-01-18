// Modules protects their variable and functions from leaking by default
// To give Access we need to export it from the module and then import it in the other.

console.log("Sum Module Executed");

var x = "Hello Var"; // Common Module

//export var x = "Hello Var";  // ES Module

function calculateSum(a,b){  // Common Module
    const sum = a + b;
    console.log(sum);
}

/*export function calculateSum(a,b){  // ES Module
    const sum = a + b;
    console.log(sum);
}*/

//module.exports = calculateSum; // for single export
/*module.exports = {     // for multiple export old way
    x: x,
    calculateSum: calculateSum
};*/ 

/*
module.exports.x = x; // Alternaet way
module.exports.calculateSum = calculateSum;  // Alternaet way
*/

module.exports = { x, calculateSum }; // for multiple export new way