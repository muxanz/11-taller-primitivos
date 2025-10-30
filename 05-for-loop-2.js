const prompt = require('prompt-sync')();

let num = parseInt(prompt('Ingresa un número: '));

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}