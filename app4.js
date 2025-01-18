/*---------------- Common Module ---------------------*/
require("./app4Include") // One Module into Another
//const calculateSum = require("./app4Sum") // whatever exported from app4Sum will come over here
//const obj = require("./app4Sum") // for multiple exports
// const {x, calculateSum} = require("./app4Sum") // de-structuring on the fly

// const { calculateMultiply } = require("./app4calculate/app4multiply") // calling from folder

const {calculateSum, calculateMultiply} = require("./app4calculate") // calling from module as folder

const data = require("./app4Data.json")  // import JSON file

/*---------------- ES Module ---------------------*/
//import { x,calculateSum }  from "./app4Sum.js"

var name = "Namaste NodeJs";

var a = 10;
var b = 20;

//obj.calculateSum(a,b);
calculateSum(a,b);
calculateMultiply(a,b);
console.log(name);
//console.log(obj.x);
//console.log(x);
console.log(data);


