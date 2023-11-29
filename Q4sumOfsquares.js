var readlineSync = require("readline-sync");

let n= parseInt(readlineSync.question("Enter a Number:"));

function sumOfsquares(n) {
    let sum=0;
   for (let i=1; i<=n; i++) { 
    let sq=i*i;
    sum=sum+sq
} 
        console.log("sum Of SquaRe is",sum);
 }
    sumOfsquares(n)
