/*  IF */

let edad = 16

if(edad >= 18) {
    console.log("podes pasar")
}
else {
    console.log("no podes pasar")
}

/* si la condicion de if es verdadera, se ejecuta lo que esta dentro del if y se omite el else. */
/* si la condicion de if es falsa, se omite lo que esta dentro del if y se ejecuta lo que esta dentro del else, si es que hay, si no hay else, simplemente sigue con el codigo, como si nada hubiera pasado. */

/* el else puede omitirse, tranquilamente puede escribirse solo un if, y de esta manera, hacer una condicion simple. */

/* caso valido, pero no mejorado */

let dato = "asd"

if (dato === null || dato === "") {
    console.log("error, dato no valido")
}
else {
    console.log("dato valido")
}

/* caso mejorado */

dato = ""

if (!dato) {
    console.log("error, dato no valido")
}
else {
    console.log("dato valido")
}

/* explicacion: al negar el dato, si la variable dato es falsy, ! lo convierte a true y se ejecuta el if */

/* if (dato) {} : lo que hace el if en este caso, es verificar que el dato contenga un valor truthly, si lo es, se ejecuta el if, sino, el else. Por esto, if (!dato) {} se usa para el caso contrario, es decir, si dato no es truthly, osea, si es falsy, se ejecuta el if, que va a ser la excepcion. */

let puntos = "1000"

if (puntos > 0 && puntos <= 1000) {
    console.log("principiante")
}
else if(puntos > 1000 && puntos <= 2000) {
    console.log("avanzado")
}
else if(puntos > 2000) {
    console.log("experimentado")
}
else{
    console.log("error, dato no valido")
}

/* el uso de ifs anidados es mala practica en JavaScript */

/* ejercicio 1 */

let hijos = prompt("cuantos hijos tiene?")

if (!hijos) {
    console.log("no tiene hijos")
}
else {
    console.log("tiene " + hijos + " hijos")
}

/*  ejercicio 2 */
