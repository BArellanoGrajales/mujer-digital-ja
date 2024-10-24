//Pratica de clase del 23 de Octubre del 2024

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('como te llamas', (name) => {
    console.log('hola bienvenida ' + name);
    rl.close();
});
