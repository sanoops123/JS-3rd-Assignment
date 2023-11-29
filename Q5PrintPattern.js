var readlineSync = require("readline-sync");

let rows= parseInt(readlineSync.question("Enter a Number:"));

function PrintPattern(rows) {
    for (let i=1;i<=rows;i++){
    let print='*';
      console.log(print.repeat(i));
    }
      
}
PrintPattern(rows)