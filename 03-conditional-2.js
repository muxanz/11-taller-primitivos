const prompt = require('prompt-sync')();

let num = parseInt(prompt('Ingresa un número: '));

if (num > 0) {
    console.log(`El número ${num} es positivo.`);
} else if (num < 0) {
    console.log(`El número ${num} es negativo.`);
} else if (num == 0){
    console.log(`Número cero ${num}`);
} else {
    console.log('Valor inválido!!');
}