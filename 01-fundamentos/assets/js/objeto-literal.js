
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
    'ultima-pelicula': 'Infinity War'
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



