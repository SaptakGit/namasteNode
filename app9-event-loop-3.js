const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Time expired"),0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./note-ep9.txt", "utf8", () => {
    setTimeout(() => console.log("2nd Timer"),0);

    process.nextTick(() => console.log("2nd nextTinck"));

    setImmediate(() => console.log("2nd setImmediate"));

    console.log("File Reading CB")
});

process.nextTick(() => console.log("process.nextTinck"));

console.log("Last line of the file.");


// Last line of the file.
// process.nextTinck
// Promise
// Time expired
// setImmediate
// File Reading CB
// 2nd nextTinck
// 2nd setImmediate
// 2nd Timer