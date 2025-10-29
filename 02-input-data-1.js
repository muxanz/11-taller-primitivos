const prompt = require('prompt-sync')();
let currentYear = 2025;
let yearBirth = parseInt(prompt('Ingresa tu año de nacimiento: '));
let age = currentYear - yearBirth;
console.log(`Tu edad es ${age}.`);
