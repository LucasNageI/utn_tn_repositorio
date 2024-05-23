### Que es JavaScript?

Es un lenguaje de programacion interpretado por el v8engine.
Se ejecuta en el navegador.
Es un lenguaje de alto nivel.
Es debilmente tipado, y de tipado dinamico.
Es un lenguaje basado en prototipos.

Debilmente tipado: no necesito especificar tipo de dato de una variable.
Tipado dinamico: puede variar el tipo de dato de una variable.

# Principio DRY(dont repeat yourself)

Este principio busca que no repitas codigo para una maxima optimizacion del codigo.

# Tipos de datos (clase 11)

**Datos Primitivos**

-string (para textos, se indican entre "" o '')
-number (para numeros)
-null (ausencia o nulidad de un dato)
-undifined (no hay un dato definido)
-boolean (true o false)

# Operadores Aritmeticos (clase 11)

**Devuelven String**

+(concatenacion): sirve para anidar strings.

"ho" + "la" = "hola"

**Devuelven Number**

+: suma

-: resta

*: multiplicacion

/: division

%: sacar resto de la division

# Falsy y Truthly (clase 11)

**Valores Falsy**

0
""
false
null
undefined
NaN

**Valores Truthly**

infinitos

# Comparadores (clase 11)

== igual.
=== estricta igualdad.
!= diferencia.
!== estricta diferencia.
< menor que.
> mayor que.
>= mayor o igual a.
<= menor o igual a.

# Operadores Logicos (clase 12)

! (NOT): da el valor opuesto al dato que estoy negando.

|| (OR): selecciona el primer valor, si es falsy, automaticamente devuelve el segundo valor. Si hay mas de un truthly, devuelve el primero que aparezca.

&& (AND): evalua si el primer valor es truthly o falsy
    si es falsy:
        devuelve el primer valor

    su es truthly:
        devuelve el segundo valor

**Tablas de la Verdad**

AND:
true && true = true
true && false = false
false && false =  false
false && true = false


OR:
true || true = true
true || false = true
false || false =  false
false || true = true

# Variables (clase 12)

hoisting: es la capacidad de llamar a una variable antes de que haya sido declarada.
declaracion: es cuando se crea una variable, se declaran con VAR, LET y/o CONST.

VAR (antiguo, EcmaScript5-): 
tiene hoisting? SI
se puede reasignar? SI
se puede redeclarar? SI (globalmente)
valor implicito en undifined? SI

LET (nuevo, EcmaScript6+):
tiene hoisting? NO
se puede reasignar? SI
se puede redeclarar? NO (no en el mismo bloque, si el bloque es distinto, si se puede redeclarar)
valor implicito en undifined? SI

CONST (nuevo, EcmaScript6+):
tiene hoisting? NO
se puede reasignar? NO
se puede redeclarar? SI (mientras esten en distintos bloques)
valor implicito en undifined? NO (tira error)

# Funciones Nativas (clase 13)

Una funcion nativa  es una fucion que se puede llamar sin que haya sido programada por nosotros, viene con el lenguaje.

isNaN(), es una funcion nativa que devuelve true o false, segun si es NaN o no.

alert(), es una funcion nativa que recive un string y lo muestra en forma de pop up en la pagina. No retorna nada.

typeof(), nos dice que tipo de dato es el que ingresamos.

prompt(), es una funcion nativa que recibe un mensaje y devuelve el valor ingresado por el usuario, en forma de string si devolvio algo, en forma de null si cancelo el prompt, o un empty string si devuelve un espacio vacio.

parseInt(), transforma un float en entero, truncandolo, es decir, "redondeandolo" para abajo. Si no se puede transformar, devuelve NaN.

permite recibir un valor decimal. Si no se puede transformar, devuelve NaN.

# IF (clase 13)

if (condicion) {
    codigo a ejecutar si la condicion se cumple
}
else {
    codigo a ejecutar si la condicion no se cumple
}

else puede no escribirse.

# Bucle WHILE (clase 13)

Hasta que se cumpla la condicion, el codigo dentro de el while se repite.

while (condicion) {
    modificacion para que la condicion se cumpla
}

El codigo se queda en bucle hasta que la condicion del while se cumpla, una vez que se cumple, el codigo sigue normalmente.

# Bucle FOR (clase 14)

Se usa cuando queremos repetir algo cuantas veces querramos.

FOR para de ejecutarse cuando el limite es un valor falsy

for (let i = valorInicial; limite; actualizacion) {
    codigo a ejecutar
}

i = iterador.

limite: es el limite del bucle, se indica cuantas veces tiene que repetirse el bucle.

actualizacion: es lo que pasa una vez finalizada una iteracion.

codigo a ejecutar: codigo que se ejecuta en cada iteracion mientras la condición sea verdadera.

**Ejemplo**

for(let i = 1; i <= 10; i = i + 1){
    console.log(i)
}

En este caso, se va a imprimir en consola:
1
2
3
4
5
6
7
8
9
10

Esto porque llegado al 10, la condicion es falsy.

# Funciones (clase 14)

Una funcion sirve para guardar un bloque de codigo, que sirve para algo. Cuando querramos hacer ese algo, en vez de escribir todo el codigo devuelta, solo se invoca la funcion y listo.

**Declaracion de la funcion**

function nombreDeLaFuncion (parametros) {
    codigo de la funcion
}

Parametro: guardan un espacio para que mas adelante se le de un valor.

**Invocacion de la funcion**

nombreDeLaFuncion()

**Funcion Agnostica**

Una funcion agnostica es una función que puede recibir datos a traves de sus parametros, los procesa y devuelve un resultado a traves de una instruccion return(), sin depender de un contexto especifico mas alla de los valores proporcionados en los parametros.

**Ejemplo**

function calcularMinutos (horas) {
    return (horas * 60)
}

let horas = Number(prompt("ingrese la cantidad de horas que quiere pasar a minutos"))

console.log(horas + " hora/horas es igual a " + calcularMinutos(horas) + " minutos")

En este caso, lo que se hace es declarar una funcion llamada "calcularMinutos", se pasa un solo parametro llamado "horas", y dentro de la funcion, se retorna el valor de (horas * 60), para devolver los minutos de las horas.

Luego, se declara una variable llamada "horas", que recibe un valor Numerico de prompt, donde se deben ingresar la cantidad de horas que quieren ser calculadas en minutos.

Por ultimo, se muestra en consla el numero de horas ingresado y se llama a la funcion, pasandole como parametro la variable ingresada.

# Propiedades de strings (clase 14)

**console.log("pepe".length)**

Devuelve la cantidad de digitos del string.

# Metodos de strings (clase 14)

**console.log("PEPE".toLowerCase())**

Transforma las letras del string en minusculas.

**console.log("pepe".toUpperCase())**

Transforma las letras del string en mayusculas.

**console.log("pepe hola     ".trim().length)**

Saca los espacion finales del string, y calcula los digitos sin esos espacios finales.

**console.log("pepe".includes("p"))**

Devuelve true o false, comprueba si el string ingresado contiene el digito que se especifica, en este caso, devuelve true, ya que "pepe" contiene al menos un digito "p".

**console.log("pepe como andas".replaceAll(" ", "-"))**

Reemplaza el primer valor especificado, por el segundo valor especificado, en este caso, reemplaza " " por "-".

**console.log("pepe".repeat(3))**

Repite el string las veces que sea especificado, en este caso, 3 veces.

# Objetos (clase 15)

Los objetos son declarados con const, ya que no puede ser reasignado.

Sintaxis: 

const datos_usuario = {
    edad: 90,
    nombre: "pepe",
    dinero: 7000
}

# Arrays (clase 15)

Se conocen como arrays, listas, arreglos, matriz, coleccion.
Sirven para listar elementos.

Sintaxis: 

let notasTrimestres = [9, 10, 8]

A los elementos de los arrays se los llaman por indice, que empieza a contar desde 0, es decir, primer elemento, indice 0, segundo elemento, indice 1, tercer elemento, indice 2.

console.log(notasTrimestres[1])

En este caso, se esta mostrando en consola la nota de elemento 2, indice 1

**Tambien se pueden modificar asi:**

array[1] = "7"
console.log(array[1])

**Se puede ver la longitud de un array asi:**

console.log(array.length)

# Metodos de Arrays (clase 15)

**pop():** elimina el ultimo elemento y lo devuelve.  Mutan el valor original.
nombres.pop()

**shift():** elimina el primer elemento y lo devuelve. Mutan el valor original.
nombres.shift()

**push():** agrega un elemento al final del array. Muta el valor original. Devuelve la nueva cantidad de elementos.
nombres.push("leonel")

**unshift():** agrega un elemento al principio del array. Muta el valor original. Devuelve la nueva cantidad de elementos.
nombres.unshift("axel")

**indexOf():** te dice el indice del valor ingresado. No es compatible con arrays que no son tipo string.
nombres.indexOf("juan")

Sirve para manejar valores, los podemos cambiar una vez que sabemos el indice del elemento que queremos manejar. 

**splice():** Recibe 3 argumentos (la posicion, cuantos elementos elimina, nuevo elemento).
nombres.splice("valentina", 0, "pepe")

En este caso, saca a valentina, y agrega a pepe.
Cuantos elementos elimina empieza a contar desde el elemento especificado en la posicion.

# recorridos de arrays (clase 16)

for (let i = 0; i < nombres.length; i++){
    console.log("hola " + nombres[i])
}

en este caso, se crea la variable de iteracion, y se le asigna un valor de 0, mientras i sea menor a la cantidad de elementos del array, se ejecuta el codigo dentro del for, y por cada iteracion, la variable aumenta su valor en 1, cada iteracion muestra en consola "hola " y accede al array nombres mediante la iteracion, que empieza en 0 y aumenta a medida de que transcurre el bucle, por lo que cada iteracion muestra un elemento nuevo del array.

# arrays de objetos (clase 16)

const carrito = [
    {
        nombre: "tv samsung",
        precio: 300,
        cantidad: 3
    },
    {
        nombre: "patineta",
        precio: 30,
        cantidad: 1
    }
]

Se declaran con const, ya que es conveniente al trabajar con objetos.
Para recorrer un array de objetos, es similar a lo que se hace con un array de strings

for (let i = 0; i < carrito.length; i++){
    const producto = carrito[i]
    console.log("has comprado el producto " + producto.nombre + "x" + producto.cantidad + "a un precio de " + (producto.cantidad * producto.precio))
}

ahora, cada vez que ocurre una iteracion, se crea una variable llamada producto, que indica a que indice del array va a acceder, luego, muestra en consola el nombre, la cantidad y el precio del producto del array al que se accedio, esto se repite hasta que el array se quede sin elementos para mostrar

**en caso de querer hacer un conteo**

tenemos que declarar una variable fuera del bucle. lo que hace que mantenga el valor al ser cambiada por cada iteracion, quedaria asi

let sumatoria_edad_1 = 0

for (let i = 0; i < personajes.length; i++){
    const personaje = personajes[i]
    console.log("mi nombre es " + personaje.nombre + " " + personaje.apellido + ", y tengo " + personaje.edad + " años")
    sumatoria_edad_1 = sumatoria_edad_1 + personaje.edad
}

ahora, se declara una variable llamada sumatoria_edad_1, y se le asigna un valor inicial de 0, luego, en cada iteracion, a la variable sumatoria_edad_1 se le suma la edad del personaje mas el valor inicial de la variable sumatoria_edad_1

de esta manera, al terminar la iteracion, la sumatoria se queda con el valor cambiado, y no se elimina.

# forof (clase 16)

esta es una manera mas simplificada de hacer lo que hicimos recien

for (const personaje of personajes) {
    console.log(personaje)
}

crea una variable "personaje", que guarda el valor de cada elemento del array "personajes"
luego muestra en consola cada elemento del array

los forof se utilizan para recorrer el array entero, en casos donde se excluyen objetos del array, es mejor con un for.

# forin (clase 16)

const datos = {
    nombre: "pepe",
    apellido: "suarez",
    dni: "78653422"
}

let resultado = ""

for (let propiedad in datos){ 
    console.log(resultado + "\n" + propiedad + ": " + datos[propiedad])
}

esto sirve para recorrer las keys de un objeto, propiedad representa cada key, es decir nombre, apellido y dni.
se muestra en consola un salto de linea, el nombre de la "propiedad: " y el valor de la propiedad

# metodos avanzados de arrays (clase 16)

**.forEach()**

personajes.forEach(function (personajes){
    console.log(personajes)
})

por cada elemento del array, ejecuta lo que hay dentro de la funcion anonima, en este caso, imprime cada elemento del array, es decir, cada objeto del array personajes

**.filter()**

filter recibe al elemento:
    si el valor de retorno de la callback es truthly entonces el elemento se agregara al array
    si el valor de retorno de la callback es falsy, se ignorara

filter siempre retorna el array
si el array es vacio, ningun elemento cumplio con la condicion del filter

basicamente, filtra los elementos que cumplen con la condicion de la funcion, y elimina los elementos que no cumplan con dicha condicion.

const personajes_mayores_de_edad = personajes.filter(function (personajes) {
    return personajes.edad >= 18
})

esta es una manera de filtrar aquellos personajes que sean menores de 18 años

**.find()**

find puede retornar undefined si no encuentra ningun objeto, o el primer elemento que encuentra, si hay mas de uno, omite los otros.

const id_1 = personajes.find(function (personajes){
    return personajes.id === 1
})

console.log(id_1)

en este caso, busca el elemento que tenga el valor id en 1

**.map()**

sirve para crear un array en base a un array
siempre retorna un array
va a recorrer el array, y por cada elemento, la callback va a ejecutarse
el valor de retorno de la callback es el valor del nuevo elemento que se agrega al array creado

const objetos = [
    {
    nombre: "vaso",
    id: 1
    },
    {
    nombre: "pila",
    id: 2
    },
    {
    nombre: "computadora",
    id: 3
    }
]

dado este array, vamos a crear otro array, esta vez de strings, que contenga el nombre de cada elemento

const mapeo_objetos = objetos.map(function (objetos){
    return "<div>" + objetos.nombre + "</div>"
})

se creo un array donde hay 3 elementos, y por cada uno se imprime el nombre dentro de un div

**.some()**

sirve para saber si un elemento cumple con x condicion



const numeros = [1, 2, 3, 4, 5];
const numero_mayor_a_3 = numeros.some(function(numero) {
    return numero > 3;
});
console.log(numero_mayor_a_3); 

en este caso, se crea un array de numeros, y se usa el some para saber si hay alguno de los elementos del array que sea mayor a 3

devuelve true, ya que 4 y 5 son mayores a 3

**.every()**

sirve para saber si todos los elementos cumplen con x condicion

const edades = [22, 18, 25, 30, 17];
const todos_son_adultos = edades.every(function(edad) {
    return edad >= 18;
});

console.log(todos_son_adultos);

ahora, se da un array de edades, y posteriormente se usa un every para saber si todos los elementos del array edades son mayores de 18

devuelve false, ya que 17 < 18

**.findIndex()**

sirve para buscar el indice de x elemento

const frutas = ["manzana", "sandia", "melon", "banana"]
const buscar_indice_banana = frutas.findIndex(function (fruta){
    return fruta.includes("banana")
})

console.log(buscar_indice_banana)

devuelve 3, que es el indice de banana.

lo que hizo en este caso, fue buscar algun elemento que incluya banana en su nombre