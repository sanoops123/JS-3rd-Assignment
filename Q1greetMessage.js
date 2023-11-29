var readlineSync = require('readline-sync');

let name= parseInt (readlineSync.question(' Enter a name:'));

function greetingMessage(name){
    console.log("Hello ,",name,"!");
}
 greetingMessage('Sanoop');
