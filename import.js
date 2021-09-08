let getDate = require("./index");
let result = getDate(365);
console.log(`${result.getDate()}-${result.getMonth()}-${result.getFullYear()}`);
