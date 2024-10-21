
//la creaci[on de areglos puede ser de difernetes formas

const arr = new Array(10);
console.log(arr);
// en la visualizaci[on del en chrome se que es un arreglo por el uso de llaves cuadradas

// otra forma de crear un arreglo es con []
const arr2 = [];
console.log(arr2);
// los arreglos son una colecci[on de infromaci[on  ]]

// Ejemplo de un arreglo con colecci[on son Strings
]
let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];


// ahora le digo a la consola que lo unico que me interesa es la primera posisci[on 
// Instrucicion:  Impirmeme solo la primera posici[on de mi arreglo: videoJuegos
console.log(videoJuegos[0]);

//Los areglos puedem ponerse en listado vertical no solo horizontal
let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
];

//instruccion: imprimir el tercer arreglo
console.log(arregloCosas[3]);

// ejemplo de un arreglo heterogéneo en JavaScript

let arregloCosas = [
    true,                             // 1. Un valor booleano (true)
    123,                              // 2. Un número entero (123)
    'Fernando',                       // 3. Un string o cadena de texto ('Fernando')
    1+2,                              // 4. Una expresión que se evalúa a un número (1+2, que da 3)
    function(){},                     // 5. Una función anónima vacía
    ()=>{},                           // 6. Una función de flecha vacía
    { a: 1 },                         // 7. Un objeto con una propiedad 'a' cuyo valor es 1
    ['x', 'Megaman', 'ZZero', 'Dr. Light', 'Dr. Willy']  // 8. Otro arreglo que contiene varios strings
  ];
  

  /* Explicación del contenido anterior:
true: El primer elemento es un valor booleano (true), que es uno de los tipos de datos más básicos en JavaScript.

123: El segundo elemento es un número entero (123), que también es un tipo de dato primitivo.

'Fernando': El tercer elemento es una cadena de texto o string ('Fernando').

1+2: El cuarto elemento es una expresión matemática que JavaScript evalúa. En este caso, la suma de 1+2 da como resultado 3.

function(){}: El quinto elemento es una función anónima vacía. En JavaScript, las funciones son objetos de primera clase, lo que significa que pueden almacenarse en variables y estructuras de datos, como un arreglo.

()=>{}: El sexto elemento es una función de flecha vacía (arrow function). Esta es una sintaxis más moderna para definir funciones en JavaScript.

{ a: 1 }: El séptimo elemento es un objeto literal. Tiene una sola propiedad a con un valor de 1.

['x', 'Megaman', 'ZZero', 'Dr. Light', 'Dr. Willy']: El último elemento es otro arreglo, que contiene una serie de cadenas de texto relacionadas (posiblemente personajes de un juego).

 */