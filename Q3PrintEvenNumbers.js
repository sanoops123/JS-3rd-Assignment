var readlineSync = require("readline-sync");

let n= parseInt(readlineSync.question("Enter a Number:"));

function printEvenNumbers(n) {
    console.log('Even Numbers are :');
    for (let i = 1; i<=n; i++) {
        if (i%2==0){
            console.log('',i);
        }
}

}
printEvenNumbers(n)
