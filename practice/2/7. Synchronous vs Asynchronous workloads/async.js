const fs = require("fs");

console.log("1");
const res = fs.readFile("test.txt", (err, data) =>
  console.log(data.toString())
);
console.log("2");
