### Que es JavaScript?

Es un lenguaje de programacion interpretado por el v8engine.
Se ejecuta en el navegador.
Es un lenguaje de alto nivel.
Es debilmente tipado, y de tipado dinamico.

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