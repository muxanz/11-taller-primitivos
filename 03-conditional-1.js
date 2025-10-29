const prompt = require('prompt-sync')();

let age = parseInt(prompt('Ingresa tu edad: '));

if (age >= 18) {
    console.log('Puedes entrar :)');
} else {
    console.log('No puedes entrar :(');
}