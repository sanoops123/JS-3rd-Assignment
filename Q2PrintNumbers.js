var readlineSync = require("readline-sync")

let n= parseInt(readlineSync.question("Enter a Number:"));

function printNumbers(lastNumber) {
    for (let i = 1; i <=n; i++) {
    console.log(i);
}

}
  printNumbers(n)
  

