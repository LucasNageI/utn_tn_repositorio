/* FUNCIONES */

/* sirve para guardar un bloque de codigo, que sirve para algo. Cuando querramos hacer ese algo, en vez de escribir todo el codigo devuelta, solo se invoca la funcion y listo */

/* evita repetir */

function sumar2Mas2() { /* declaracion de la funcion */
    console.log("el resultado de la suma es: " + (2 + 2))
}

sumar2Mas2() /* invocacion de la funcion, esta funcion suma 2 + 2 */

function sumar(numero1, numero2) /* esto es un parametro */ {
    numero1 = numero1 + 1 /* esto hace que numero1 tenga por defecto 1 */ /* los parametros pueden no tener ningun valor por defecto, simplemente se quedan como undefined, y permanecen asi hasta que se le asigne algun valor */
    console.log("el resultado de la suma es:" + (numero1 + numero2))
}

sumar(9 /* como el primer parametro (numero1) tiene por defecto 1, este 9 en realidad es un 10 */, 120)

/* parametro: guardan un espacio para que mas adelante se le de un valor */

function multiplicar(numero1, numero2) /* esto es un parametro */ {
    console.log("el resultado de la multiplicacion es: " + (numero1 + numero2))
}

multiplicar(2, 2) /* en este caso, los parametros no tienen un valor predefinido, por lo tanto, los 2 parametros son undefined */

function restar(a, b){ /* esto es una funcion agnostica, ya que es independiente a los valores que se les de, y que no hace otra cosa mas que la que se le indica; y es abstracta ya que se puede llamar donde querramos */
    return (a - b) /* con el return, sabemos que devuelve la funcion, y nosotros definimos cuando usar el retorno de esta funcion */
}

let numero1 = 10
let numero2 = 5

let resultado = restar(numero1, numero2)

document.write(resultado) /* esto escribe el resultado en html */

/* practica 1: calcular el IVA */

function calcularIVA (precio) {
    return (precio * 0.21)
}

let precioACalcular = Number(prompt("ingrese un precio para calcular el iva"))

console.log("el IVA de " + precioACalcular + " es: " + calcularIVA(precioACalcular))

/* practica 2: calcular horas en minutos */ 

function calcularMinutos (horas) {
    return (horas * 60)
}

let horas = Number(prompt("ingrese la cantidad de horas que quiere pasar a minutos"))

console.log(horas + " hora/horas es igual a " + calcularMinutos(horas) + " minutos")

/* practica 3: validar si el dato ingresado es un numero */

function validacionNumeros (num) {
    return (!num || isNaN(num))
}

let valorIgresado = prompt("ingrese un dato")

if (validacionNumeros(valorIgresado) == false) {
    console.log("su valor es un numero")
}
else {
    console.log("su valor no es un numero")
}

/* resolucion */

function validarNumeros (){

    let num = prompt("ingrese un numero")

    while(!num || isNaN(num)){
        num = prompt("error: vuelva a ingresar el numero")
    }

    num = Number(num)

    console.log(num)

    return num
}

validarNumeros()