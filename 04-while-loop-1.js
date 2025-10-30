const prompt = require('prompt-sync')();

let num = parseInt(prompt('Ingresa un número: '));

let counter = 1;

while (counter <= num) {
    console.log(counter);
    counter ++;
}