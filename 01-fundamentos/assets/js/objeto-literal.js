
//los obejtos literales son como los diccinarios

let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War' // el ponerlo entre comillas es una estartegia para decirle  a la mauqina que eso es un String
};

console.log(personaje);
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']); // utilizar los corchetes y las comillas sensillas es lo mismo que utilizar el punto que hemos estado utilizando en todos los ejemplso
console.log('Edad:', personaje.edad);  
console.log( 'Coords:', personaje.coords); // aqui optienes las cordenadas y despues concatenas la latitud
console.log('Lat', personaje.coords.lat);

//ejercicio, dime le numero de trajes que tiene Airoman
// yo se que la repsuesta es 3, pero imagenemos que no lo sabemos
console.log('No. Trajes', personaje.trajes.length );

//Acceder al último elemento del array: Para obtener el último elemento de un array, puedes restar 1 al valor de .length. 
console.log('ultimo traje', personaje.trajes[personaje.trajes.length - 1]);  //  el índice del último elemento siempre será igual a longitud del array - 1 (ya que los índices comienzan desde 0).
/* Uso de console.log:
La función console.log() se usa para imprimir el resultado en la consola. Aquí imprime dos cosas:

'ultimo traje': Un mensaje en texto que dice "último traje".
personaje.trajes[personaje.trajes.length - 1]: El valor del último traje, que en este caso es 'Hulkbuster'. */

const x= 'vivo';
console.log('Vivo:', personaje[x]); // aqui se imprime el valor de la propiedad vivo que es false

console.log('Ultima pelicula:', personaje['ultima-pelicula']);

// Mas Detalles de objetos literales 

//Ejercicio sobre som ohacerle para borrar la propiedad de un objeto 

delete personaje.edad; 
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje); // Object.entries() es un método que devuelve una matriz de pares de propiedades [clave, valor] de un objeto dado, en el mismo orden que se obtienen en un bucle for...in (la diferencia es que un bucle for-in enumera las propiedades en la cadena de prototipos también).
console.log(entriesPares);

// Personaje = true;
console.log(personaje);

Object.freeze(personaje); // Object.freeze() es un método que congela un objeto: es decir, evita que se agreguen nuevas propiedades al objeto, elimina las propiedades existentes y evita que se modifiquen las propiedades existentes.

personaje.dinero = 1000000000;
console.log(personaje);
