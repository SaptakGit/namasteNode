const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Time expired"),0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./note-ep9.txt", "utf8", () => {
    console.log("File Reading CB");
});

process.nextTick(() => {
    process.nextTick(() => console.log("inner nextTinck"));
    console.log("nextTick");
});

console.log("Last line of the file.");


// Last line of the file.
// nextTinck
// inner nextTinck
// Promise
// Time expired
// setImmediate
// File Reading CB