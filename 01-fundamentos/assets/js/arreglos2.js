let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length); // el length despues del punto te dice cuantos elementos existen dentro del arreglo
// length te dice lo largo de ese arreglo

let primero = juegos[0]; // el cero sirve para obtener la primera posisición del arreglo 
let primero = juegos[ 2-2 ];  // dices que quieres la posicisión 0 que sale de la operación 2-2
let ultimo = juegos [3]; // le estoy diciendo que me de el valor que se encunetra en la posicisión 3


let ultimo = juegos [ juegos.lenght-1 ]; //  se utiliza cuando el areglo es dinamico y no se a ciencia cierta cual es el valor del ultimo elemento
//juegos.length   con esta instrución le pides que sea el ultimo elemento del arreglo
// al ponerle el -1  le dices que sea el utimo numero -1 
// esto solo se hace en arreglos dinamicos

console.log({ primero, ultimo }); // aqui se hace la impreción del primer y ultimo elemento del arreglo


//El forEach ejecuta una instrucción por cada uno de los elementos que estan dentro del arreglo
juegos.forEach( (elemento, indice, arr) => {
    console.log({ elemento, indice, arr }); // aqui se imprime el elemento
});

//Metodo para a;adir un juego
//juegos.push('F-Zero'); // un metdodo es lo que se va a ejecutar cuando noostros le llamamos

let nuevaLongitud = juegos.push('F-Zero');  // push añade elementos al final del arreglo
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juego.unshift('Fire Emblem'); // unshift es para agregar un elemento al inicio del arreglo
console.log({ nuevaLongitud, juegos });

let juegoBorrado = juegos.pop() //pop elimina el ultimo elementos del arreglo y lo regresa
console.log({ juegoBorrado, juegos });

