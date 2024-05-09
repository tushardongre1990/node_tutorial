const os = require("os");
const path = require("path");
const { add, sub, multiply, divide } = require("./math");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log("--------------------------");
console.log(__dirname);
console.log(__filename);
console.log("--------------------------");

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));
console.log("--------------------------");
console.log(add(5, 8));
console.log(sub(51, 98));
console.log(multiply(5, 6));
console.log(divide(2, 6));
console.log("--------------------------");
