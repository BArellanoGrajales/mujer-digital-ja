//Pratica de clase del 23 de Octubre del 2024

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const idioma = {
    espanol: 'Hola',
    ingles: 'Hello',
};

//rl.question('como te llamas', (idioma) => {    

//se elimino esto
/* if (idioma === 'espanol') {
    console.log('Hola');
} else {} */

rl.question('¿Como te llamas?', (name) => {
    rl.question('¿En que idioma quieres que te salude? Escribe espanol o ingles ', (lenguaje) => {
        console.log(lenguaje + name);
        rl.close();
    });
});
//rl.question('como te llamas', (idioma) => {   


/* rl.question('¿Como te llamas?', (nombre) => {
        rl.question('¿En qué idioma te gustaría que te salude? (ingles, español): ' (idioma) => {
        const saludo = idioma[idioma];
        console.log( idioma, + name);
        rl.close(); */
