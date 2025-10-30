const prompt = require('prompt-sync')();

const password = '1234'
let user_passwd = '';

while (user_passwd.toLowerCase() !== password) {
    user_passwd = prompt('Ingresa contraseña: ');
    
    if (user_passwd === password) console.log('Contraseña correcta.');
}