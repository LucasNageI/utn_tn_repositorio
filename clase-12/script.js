/* OPERADORES LOGICOS */
/* 

! (NOT): da el valor opuesto al dato que estoy negando.

*/

console.log(! false)

/* 
|| (OR): selecciona el primer valor, si es falsy, automaticamente devuelve el segundo valor. Si hay mas de un truthly, devuelve el primero que aparezca.
*/

console.log("" || "hola")

/* 
&& (AND): evalua si el primer valor es truthly o falsy
    si es false:
        devuelve el primer valor

    su es true:
        devuelve el segundo valor
*/

console.log(0 && "sda")

console.log("1" && "2")

console.log("1" && "2" && "3")



/* TABLAS DE LA VERDAD

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
*/



/* VARIABLES: es un espacio reservado que almacena un dato (referencia), que debe tener un identificador, es decir, el nombre de la variable */

var edad = 50
console.log(edad)

edad = 19
console.log(edad)



let nombre = "lucas"
console.log(nombre)

nombre = "juan"
console.log(nombre)

/* 
VAR(antiguo, EcmaScript5-): 
tiene hoisting? SI
se puede reasignar? SI
se puede redeclarar? SI (globalmente)
valor implicito en undifined? SI

LET(nuevo, EcmaScript6+):
tiene hoisting? NO
se puede reasignar? SI
se puede redeclarar? NO (no en el mismo bloque, si el bloque es distinto, si se puede redeclarar)
valor implicito en undifined? SI

CONST(nuevo, EcmaScript6+):
tiene hoisting? NO
se puede reasignar? NO
se puede redeclarar? SI (mientras esten en distintos bloques)
valor implicito en undifined? NO (tira error)

hoisting: es la capacidad de llamar a una variable antes de que haya sido declarada.
declaracion: es cuando se crea una variable, se declaran con VAR, LET y/o CONST.
*/

/* AMBITOS */

let precio = 80 /* global (fuera de cualquier bloque) */

{    /* esto es un bloque (local) */
    let precio = 10
    console.log(precio) /* si precio no estuviera localmente redeclarado, tomaria el contenido de la variable global */
}

console.log(precio)


var precio_1 = 80

{
    var precio_2 = 10
    {
        var precio_3 = 50
        console.log(precio_3)
    }
}

console.log(precio_1)
console.log(precio_2)
console.log(precio_3)

/* esta es una de las razones por las que es mas comodo usar LET antes que VAR, VAR declara las variables GLOBALMENTE, mientras que LET, lo hace LOCALMENTE, esto permite redeclarar una variable varias veces, mientras que este en distintos bloques */
