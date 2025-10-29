const prompt = require('prompt-sync')();

let n1 = parseInt(prompt('Ingresa un número: '));
let n2 = parseInt(prompt('Ingresa otro número: '));

let sum = n1 + n2;
console.log(`La suma de ${n1} y ${n2} es ${sum}`);
