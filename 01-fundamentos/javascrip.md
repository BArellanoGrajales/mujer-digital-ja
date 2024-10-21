# apuntes Clase de udemy de Java Scrip que es un lenjuage tipado.

**Abrir en consola**
cocnsole.log('hola Mundo');

**Abrir en web**
console.log('hola Mundo');

**Inicializar variables forma antigua**
let a=10;
let b=20;
let c=30;
let x= a+b;

**iniciar variables forma moderna**
let a=10, b=20, c=30, x= a+b;

**Sniped para general consols logs**
clg + tap 

**Polyfill**
Un polyfill es un pedazo de código que ayuda a que nuevas características de la web funcionen en navegadores viejos que no las entienden.

Un polyfill es útil para garantizar que tu código funcione en una amplia gama de navegadores, especialmente si usas características modernas que podrían no ser compatibles en todos los entornos.

**Tipo de consoles**
console.log( x );     Sirve para Mostrar mensajes generales o de información.
console.warn( x );   Sirve para Mostrar advertencias.
console.error( x );    Sirve para mostrar errores

_lo que ponemos dentro de los parentesis se llama argumentos_

**Declarar una variables para que sepa a cual me refiero en consola**
console.log('a', a );
console.log('b', b );
console.log('c', c );

_Opción 2_ //  Decalras que algo es un objeto //

console.log( { a } );
console.log( { b } );
console.log( { c } );

_ En la opción 1 Es poner antes de la variable las comillas sensillas_

_En la opción 2 es poner las variables entre corchetes_

**//para saber que tipo de dato apunta una variable se usa el typeof//
console.log( typeof nombre );

_en este caso nombre puede ser cualquier variable_

**Agregar estilo a la consola de Java Scrip**
console.log('%c Mis variables', 'color:blue; font-weight: bold');
console.log( { a } );
console.log( { b } );
console.log( { c } );

_unicamnete se le agrega CSS a un console.log_

**Imprimes en consola varias variables a la vez**

console.table({ a, b, c, d, x});
console.table([ a, b, c, d, x]);


_Reciben arreglos (   [    ]   ) o corchetes  ( {   }  )  dentro de los parentesis y todo lo ordena en una tabla_

**Uso de constante**

const saludo = c + d;

_constantes es una variable a la que no pienso cambiarle el valor (variable) /*  y son mas ligeras que una variable con let o var. y esa es su principal ventaja En java Scrip solo se capitalizan las constantes de entorno a diferencia de otros lenjuages de programación_ 

**lo que significa los colores en la consola de Java Scrip**
Morado =  numero
Gris = string o buleanos


**Para salir del entorno interactivo de Node.js en la terminal, puedes hacer lo siguiente:**

1) Presiona Ctrl + C dos veces: Esto detendrá el proceso actual de Node.js y te devolverá a la línea de comandos de la terminal.

2) También puedes escribir .exit y presionar Enter.
node
**crear rapidamente una estructura basica de html**
! + Tab

**limpiar la terminal**
Ctrl + L

**Short-cout para comentar en VSCode**

Windows/Linux: Ctrl + /            Comentar una linea //
Windows/Linux: Shift + Alt + A     Comentar bloques de codigo /* 

_A mi me funciona solo la segunda opción

**crear variables en base a respuestas que te de el usuario tras una ventanita de alerta**

let nombre = prompt('¿Cual es tu nombre?', 'Sin nombre');

_el nombre de la variable es nombre_
_lo que esta dentro de promp es el mensaje o la pregunto que hago en la alerta_
_cuando aparezca el cuadrito donde dice nombre la persona escribe su nombre_
_ahora cuando escribes en la consola en nombre de la variable nombre, la consola te va a regresar lo que la perosona haya escrito en la casilla donde se pedia el nombre_ 

***lo mismo que lo anterior pero de otra forma***
let nombre = prompt('¿Cual es tu nombre?');
console.log( '****' + nombre + '****' ); 

_// esto es un sting vasio, no es un undefine o un valor nulo_
_lo que hace esto es que si la persona no escribe nada al escribir en la consola el nombre de la variable  me aprecera astediscos +  lo que decida escribir_


**Valor primitivo VS variable primitiva**
+ Valor primitivo: Es un dato simple, como un número (por ejemplo, 5), una letra (por ejemplo, "A"), o un valor de sí/no (como true o false). Es el dato puro.

    Ejmeplos:
                Números (como 5, 3.14)
                Cadenas de texto ("Hola")
                Booleanos (true o false)
                Null,  (sin valor en absoluto declarado)
                Undefined (en JavaScript)
                Symbol (valor unico que no es igual a ningun otro valor)

+ Variable primitiva: Es el lugar (o contenedor) donde guardas ese dato. Por ejemplo, si tienes una caja con un número dentro, la caja es la variable, y el número dentro es el valor.

**Tipos de datos en JS**

 En JavaScript, los tipos de datos primitivos son aquellos que no son objetos y no tienen métodos. Los valores primitivos son inmutables, lo que significa que no se pueden cambiar directamente. Los principales tipos de datos primitivos en JavaScript son:

+ string: Representa una secuencia de caracteres. Ejemplo: "Hola", 'Mundo'.

+ number: Representa tanto números enteros como de punto flotante. Ejemplo: 42, 3.14.

+ boolean: Representa un valor lógico, es decir, true o false.

+ undefined: Representa una variable que ha sido declarada pero no tiene valor asignado.

+ null: Representa la ausencia intencional de un valor o un valor nulo.

+ symbol: Introducido en ECMAScript 6 (ES6), representa un valor único e inmutable. Se usa para crear identificadores únicos. Ejemplo: Symbol('id').

+ bigint: Introducido en ECMAScript 2020, representa números enteros grandes (más allá de lo que number puede manejar). Ejemplo: 123456789012345678901234567890n.+


# Lower Camel Case (camelCase) vs Upper Camel Case (PascalCase)

**Lower Camel Case** y **Upper Camel Case** son convenciones de nomenclatura comúnmente usadas en programación para nombres de variables, funciones, clases, y otros identificadores. A continuación te explico la diferencia entre ellas:

## 1. Lower Camel Case (camelCase):
En **lower camel case**, el primer carácter es minúsculo y cada palabra subsiguiente empieza con mayúscula. No se utilizan espacios ni guiones entre las palabras.

- **Uso común**: Se usa típicamente para nombrar variables, funciones o métodos.
  
- **Ejemplos**:
  - `myVariableName`
  - `calculateTotalPrice`
  - `isUserLoggedIn`
  - `getUserDetails`

- **Reglas**:
  - La primera palabra empieza en minúscula.
  - Cada palabra subsiguiente empieza con mayúscula.

## 2. Upper Camel Case (PascalCase):
En **upper camel case** (también conocido como **Pascal Case**), la primera letra de cada palabra, incluyendo la primera, es mayúscula.

- **Uso común**: Se usa típicamente para nombrar clases, estructuras o constructores.
  
- **Ejemplos**:
  - `MyClassName`
  - `CalculateTotalPrice`
  - `UserLoginManager`
  - `Person`

- **Reglas**:
  - Cada palabra, incluida la primera, empieza con una letra mayúscula.

## Diferencias principales:
- **Lower Camel Case** comienza con minúscula y luego cada palabra nueva empieza con mayúscula.
- **Upper Camel Case (Pascal Case)** comienza con mayúscula en la primera palabra y en todas las siguientes.

## Cuándo usar cada uno:
- **Lower Camel Case**: Generalmente utilizado para **nombres de variables, funciones y métodos**.
- **Upper Camel Case**: Se utiliza para **nombres de clases, interfaces, y tipos**.

## Ejemplos prácticos:
```javascript
// Lower Camel Case (usado para variables y funciones)
let totalPrice = 0;
function calculateTotalPrice() {
    return totalPrice;
}

// Upper Camel Case (usado para clases)
class ShoppingCart {
    constructor() {
        this.items = [];
    }
}

#Ejmeplo de arreglo heterogéneo
**NOTA: el primer valor de mi arreglo siempre se marca con 0**
let arregloCosas = [
  true,                             // 1. Un valor booleano (true)                                      // este es mi arreglo #0
  123,                              // 2. Un número entero (123)                                        // ESte es mi arreglo #1
  'Fernando',                       // 3. Un string o cadena de texto ('Fernando')
  1+2,                              // 4. Una expresión que se evalúa a un número (1+2, que da 3)
  function(){},                     // 5. Una función anónima vacía
  ()=>{},                           // 6. Una función de flecha vacía
  { a: 1 },                         // 7. Un objeto con una propiedad 'a' cuyo valor es 1
  ['x', 'Megaman', 'ZZero', 'Dr. Light', 'Dr. Willy']  // 8. Otro arreglo que contiene varios strings
];

**Imprimir especificamente un solo arreglo**
_El código console.log(arregloCosas[3]); está imprimiendo el cuarto elemento del arreglo, que es el resultado de la expresión 1+2 (es decir, 3)_


**Palabras reservadas en JS**
- Palabras reservadas (ES5 y anteriores):
- break
- ncase
- catch
- class (introducido en ES6)
- const (introducido en ES6)
- continue
- debugger
- default
- delete
- do
- else
- enum (introducido en ES6, pero no implementado en todos los navegadores)
- export (introducido en ES6)
- extends (introducido en ES6)
- false
- finally
- for
- function
- if
- import (introducido en ES6)
- in
- instanceof
- new
- null
- return
- super (introducido en ES6)
- switch
- this
- throw
- true
- try
- typeof
- var
- void
- while
- with
- yield (introducido en ES6 para generadores)