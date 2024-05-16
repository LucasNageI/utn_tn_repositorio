/* Bucle FOR */ /* se usa cuando queremos repetir algo cuantas veces querramos */

/* la diferencia con while es que el while se repita mientras haya una condicion, el FOR para de ejecutarse cuando nosotros querramos */
/* FOR para de ejecutarse cuando el limite es un valor falsy */

/*SINTAXIS:

for(let iterador = valor_inicial; limite(mientras mi iterador no llegue a este limite se va a seguir ejecutando el FOR); actualizacion(lo que pasa una vez que pasa una iteracion) ){
    codigo a ejecutar
}   
*/

let nombre = "pepe"

for(let i = 1; i <= 3; i = i + 1) { /* i = iterador */
    console.log(nombre + i)
}

/* practica: mostrar por alerta el conteo del 1 al 10 */

for(let i = 1; i <= 10; i = i + 1){
    console.log(i)
}

/* practica: solicitar al usuario un numero 3 veces, mostrar al final de las solicitudes un alert que muestre la sumatoria de los 3 numeros */

let sumatoria = 0

for(let i = 1; i <= 2; i++) { /* i = iterador */
    let num = prompt("ingrese un numero")

    while(!num /* verifica que no sea null, o "", o "string" */ || isNaN(num)/* verifica que sea un string numerico, por ejemplo "1" no es un NaN, entonces el valor es false */) {
        num = prompt("error, dato no valido, vuelva a intentarlo")
    }

    num = Number(num)
    sumatoria = sumatoria + num
}

alert(sumatoria)

/* i++ es lo mismo que decir i = i + 1 */

alert ("lista: \n-pepe \n-juan") /* \n hace un salteo de linea */



/* propiedades de strings */

console.log("pepe".length) /* devuelve la cantidad de digitos del string (4) */



/* metodos de strings */ /* esto no modifica el valor original del string */

console.log("PEPE".toLowerCase()) /* muestra el contenido del string en minusculas */

console.log("pepe".toUpperCase()) /* muestra el contenido del string en mayusculas */

console.log("pepe hola     ".trim().length) /* elimina los espacios al final del string */

console.log("pepe".includes("p")) /* devuelve true si incluye el string especificado, y false si no lo hace */

console.log("pepe como andas".replaceAll(" ", "-")) /* transforma el primer valor por el segundo valor especificado */

console.log("pepe".repeat(3)) /* repite el string la cantidad de veces especificadas */

/* contador de letras */

console.log("pepe como andas".replaceAll(" ", "").length)