let nombre = 'Peter Parker'; //Peter parker es un string por que esta dentro de las comillas simples
console.log( nombre );

nombre = 'Ben Parker'; //Ben parker es un string por que esta dentro de las comillas simples
console.log( nombre );

//otras maneras de inciar strings que son exactamente iguales
nombre="Tia May"; //Tia May es un string por que esta dentro de las comillas dobles
noombre='Tia May'; //Tia May es un string por que esta dentro de las comillas simples


//para saber que tipo de dato apunta una variable se usa el typeof
console.log( typeof nombre ); // typeof es un operador interno que ya existe dentro de JS. y nombre es el nombre de la variable

let esMarvel = False; // como no lo pongo entre conillas entonces no es un string 
// esto que se hiso no es valido por que el sistema lo que esta haciendo es buscar una variable
// con el nombre de falso con F mayusucula y no lo encuentra por que no existe.

//Lo correcto que se debe de hacer es
let esMarvel = false;
console.log( typeof esmarvel ); // aqui la varibale es de tipo booleano


// siempre sigue siendo un numero a diferencia de otros lenguajes en los que si existe diferencia 
// JS no hace ninguna distinción entre los numeros enteros y los numeros flotantes

let edad = 33; // 33 es un numero entero por que no tiene decimales 
console.log( typeof edad );

edad = 33.001;  // 3.00  es un numero flotante por que tiene decimales
console.log( typeof edad );


