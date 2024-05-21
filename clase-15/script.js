/* Objetos */

let edad_usuario = 90
let nombre_usuario = "pepe"
let dinero_usuario = 7000

const datos_usuario = {
    edad: 90,
    nombre: "pepe",
    dinero: 7000
}

console.log(datos_usuario.edad)

/* crear un objeto llamado producto que tenga precio, nombre, descripcion y marca */

const producto = {
    precio: 9000,
    nombre: "escritorio",
    descripcion: "escritorio blanco, sin cajones, de madera",
    marca: "x"
}

/* 
funciones con camelCase
variables con snake_case
o al reves, pero es mas facil de reconocerlos si se diferencian
*/


/* los objetos son declarados con const, ya que no puede ser reasignado */

/* crear un objeto llamado persona, que tenga nombre, edad y mejor_amigo, mejor_amigo debe ser otro objeto que tenga nombre y edad */

const persona = {
    nombre: "lucas",
    edad: 16,
    mejor_amigo: {
        nombre: "sebastian",
        edad: 15
    }
}

console.log(persona.mejor_amigo.nombre) /* aca se llama al objeto "persona", despues a "mejor_amigo", y despues a "nombre" */

/* ejercicio: cambiar el nombre del mejor amigo a "pepe", y crear la propiedad nroCelular a persona */

persona.mejor_amigo.nombre = "pepe"

persona.nro_celular = 543492756321

console.log(persona.mejor_amigo.nombre)

/* para reasignar propiedades dentro de objetos */

const otra_persona = {
    nombre: "pepe",
    edad: 26,
    mejor_amigo: {
        nombre: "juan",
        edad: 25
    }
}

otra_persona.nombre = "PEPE"

const otra_persona_mas = {
    "nombre completo": "pedro",
    edad: 36,
    mejor_amigo: {
        nombre: "omar",
        edad: 35
    }
}

otra_persona_mas["nombre completo"] = "pedrito"

console.log(otra_persona_mas["nombre completo"])

/* Arrays */

let notasTrimestres = [9, 10, 8]

/* esto reemplaza escribirlo asi: */

let notaTrimestre1 = 9
let notaTrimestre2 = 10
let notaTrimestre3 = 8

console.log(notasTrimestres[1])

/* a los elementos de los arrays se los llaman por indice, que empieza a contar desde 0, es decir, primer elemento, indice 0, segundo elemento, indice 1, tercer elemento, indice 2 */

console.log("en el segundo trimestre te sacaste un " + notasTrimestres[1])

/* un array es un tipo de dato objeto, porque: */

let array = ["1", "2", "3"]

/* es lo mismo que */

let array2 = {
    0: "1",
    1: "2",
    2: "3"
}

console.log(Object(array))

/* tambien se pueden modificar */

array[1] = "7"
console.log(array[1])

/* para ver la longitud de un array: */

console.log(array.length)

/* Metodos de arrays */

const nombres = [
    "pedro",
    "pepe",
    "juan",
    "valentina",
    "julieta",
    "ana"
]

console.log(nombres)

/* pop(): elimina el ultimo elemento y lo devuelve. Muta el valor original */

console.log(nombres.pop())
console.log(nombres)

/* shift(): elimina el primer elemento y lo devuelve. Muta el valor original */

console.log(nombres.shift())
console.log(nombres) 

/* push(): agrega un elemento al final del array. Muta el valor original. Devuelve la nueva cantidad de elementos. */

console.log(nombres.push("leonel"))
console.log(nombres)

/* unshift(): agrega un elemento al principio del array. Muta el valor original. Devuelve la nueva cantidad de elementos. */
console.log(nombres.unshift("axel"))
console.log(nombres)

/* indexOf(): te dice el indice del valor ingresado. No es compatible con arrays que no son tipo string. */

console.log(nombres.indexOf("juan"))

/* sirve para cambiar valores, los podemos manejar una vez que sabemos el indice del elemento que queremos manejar */

/* aca lo estamos cambiando */

let posicion_de_juan = nombres.indexOf("juan")
nombres[posicion_de_juan] = "juani"
console.log(nombres)

/* splice(): Recibe 3 argumentos (la posicion, cuantos elementos elimina, nuevo elemento). */

let posicion_de_valentina = nombres.indexOf("valentina")
nombres.splice(posicion_de_valentina, 1)
console.log(nombres)

/* ejercicio: eliminar a pedro y a pepe */

/* let nombre_de_pedro = nombres.indexOf("pedro")
let nombre_de_pepe = nombres.indexOf("pepe")

nombres.splice(nombres.indexOf("pedro"), 1)
nombres.splice(nombres.indexOf("pepe"), 1)
console.log(nombres) */

/* mejor manera: */

function  eliminarNombre (array, nombre) {
    return array.splice(array.indexOf(nombre), 1)
}

eliminarNombre(nombres, "pedro")
eliminarNombre(nombres, "pepe")

console.log(nombres)

/* Principio KISS: Keep It Simple, Stupid */