#apuntes Clase de udemy de Java Scrip que es un lenjuage tipado.

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

