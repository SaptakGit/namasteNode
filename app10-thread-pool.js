const fs = require("fs");
const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 8;

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("1 - cryptoPBKD2 done");
})

/*fs.readFile("./note-ep10.txt", "utf8", () => {
    console.log("File Reading CB");
})*/

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("2 - cryptoPBKD2 done");
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("3 - cryptoPBKD2 done");
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("4 - cryptoPBKD2 done");
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("5 - cryptoPBKD2 done");
})