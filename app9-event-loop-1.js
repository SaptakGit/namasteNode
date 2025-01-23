const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./note-ep9.txt", "utf8", () => {
    console.log("File Reading CB")
});

setTimeout(() => console.log("Time expired"),0);

function printA(){
    console.log("a =", a);
}

printA();
console.log("Last line of the file.");


// a = 100
// Last line of the file.
// Time expired
// setImmediate
// File Reading CB