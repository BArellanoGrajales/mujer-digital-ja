const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('como te llamas', (name) => {
    console.log('hola bienvenida ' + name);
    rl.close();
});
