const nombres = ["pepe", "juan", "maria", "ezequiel"]

/* por cada nombre, que aparezca un console.log diciendo hola + nombre */

/* mala manera, incumple DRY y no se actualiza a medida de que incrementa el array */

/* console.log("hola " + nombres[0])
console.log("hola " + nombres[1])
console.log("hola " + nombres[2])
console.log("hola " + nombres[3]) */

/* mejor manera de resolverlo (recorriendo el array) */

for (let i = 0; i < nombres.length; i++){
    console.log("hola " + nombres[i])
}

/* aplicacion de mejor practica */

for (let i = 0; i < nombres.length; i++){
    let nombre = nombres[i]
    console.log("hola " + nombre)
}

/* se crea una bariable llamada nombre, donde se guarda cada elemento del array cuando pasa una iteracion del bucle for */

const carrito = [ /* array de objetos */
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

/* por cada elemento de mi carrito mostrar por consola */
/* has comprado el producto {producto.nombre} x {producto.cantidad} a un precio unitario de {producto.precio} */

for (let i = 0; i < carrito.length; i++){
    const producto = carrito[i]
    console.log("has comprado el producto " + producto.nombre + "x" + producto.cantidad + "a un precio de " + (producto.cantidad * producto.precio))
}

const personajes = [
    {
        nombre: "pepe",
        apellido: "suarez",
        id: 1,
        edad: 40
    },
    {
        nombre: "maria",
        apellido: "cassanova",
        id: 2,
        edad: 17
    },
    {
        nombre: "exequiel",
        apellido: "rodriguez",
        id: 3,
        edad: 25
    }
]

/* hacer la presentacion de cada personaje, y hacer la sumatoria de las edades */

let sumatoria_edad_1 = 0

for (let i = 0; i < personajes.length; i++){
    const personaje = personajes[i]
    console.log("mi nombre es " + personaje.nombre + " " + personaje.apellido + ", y tengo " + personaje.edad + " años")
    sumatoria_edad_1 = sumatoria_edad_1 + personaje.edad
}

console.log ("la sumatoria de las edades es: " + sumatoria_edad_1)



for (let i = 0; i < personajes.length; i++){
    const personaje = personajes[i]
}

/* esto es lo mismo que esto*/

for (const personaje of personajes) {
    console.log(personaje)
}

/* en este caso, se usa forof, para un array de strings: */

for (let nombre of nombres) {
    console.log(nombre)
}

/* los forof se utilizan para recorrer el array entero, en casos donde se excluyen objetos del array, es mejor con un for */

/* hacer el ejercicio anterior con forof */

let sumatoria_edad = 0

for (const personaje of personajes) {
    console.log("mi nombre es " + personaje.nombre + " " + personaje.apellido + " y tengo " + personaje.edad + " años")
    sumatoria_edad = sumatoria_edad +personaje.edad
}

console.log("la sumatoria de las edades es: " + sumatoria_edad)

/* forin: permite recorrer los objetos */

const datos = {
    nombre: "pepe",
    apellido: "suarez",
    dni: "78653422"
}

let resultado = ""

for (let propiedad in datos){ 
    console.log(resultado + "\n" + propiedad + ": " + datos[propiedad])
}

/* reasigna el valor de resultado, hace un salto de linea, a eso le suma la key del objeto, le agrega un ": " para organizar los datos, y por ultimo, concatena cada key del objeto "datos" */

/* en propiedad se guarda cada key, y dependiendo de la cantidad de keys que tenga el objeto, se itera la cantidad de keys que tenga ese objeto */

/* metodos avanzados de arrays, le decimos avanzados porque recibe una callback */

personajes.forEach(function (personajes){   /* funcion anonima: funcion que no tiene identificador (nombre) */
    console.log(personajes)
}) /* por cada elemento del array, esta ejecutando un console.log mostrando el elemento */

/* callback: es una funcion pasada por argumento */

/* filter recibe al elemento:
si el valor de retorno de la callback es truthly entonces el elemento se agregara al array
si el valor de retorno de la callback es falsy, se ignorara
filter siempre retorna el array
si el array es vacio, ningun elemento cumplio con la condicion del filter
 */

const personajes_mayores_de_edad = personajes.filter(function (personajes) {
    return personajes.edad >= 18
})

console.log(personajes_mayores_de_edad)

/* ejercicio con filter: */

const productos = [
    {
        nombre: "tv samsung",
        marca: "samsung",
        id: 1,
        precio: 3000
    },
    {
        nombre: "celular samsung",
        marca: "samsung",
        id: 2,
        precio: 13000
    },
    {
        nombre: "tv LG",
        marca: "LG",
        id: 3,
        precio: 2900
    },
    {
        nombre: "tv noblex",
        marca: "noblex",
        id: 4,
        precio: 2000
    }
]

/* traer los productos que sean de un precio inferior a 2950 */

/* otro filter que solo traiga productos de la marca noblex */

/* otro filter que traiga los productos que en su nombre incluyan el string tv */

const precio_accecible = productos.filter(function (productos){
    return productos.precio < 2950
})
console.log (precio_accecible)

const productos_noblex = productos.filter(function (productos){
    return productos.marca.includes("noblex")
})
console.log(productos_noblex)

const televisiones = productos.filter(function (productos){
    return productos.nombre.toLowerCase().includes("tv".toLowerCase())
})
console.log(televisiones)

/* find puede retornar el primer elemento que encuentra, si hay mas de uno, omite los otros o undefined (si no existe el elemento) */

const id_1 = personajes.find(function (personajes){
    return personajes.id === 1
})

console.log(id_1)

/* map
sirve para crear un array en base a un array
retorna un array
va a recorrer el array, y por cada elemento, la callback va a ejecutarse
el valor de retorno de la callback es el valor del nuevo elemento que se agrega al array creado
*/

const objetos = [
    {
    nombre: "vaso",
    id: 1
    },
    {
    nombre: "vaso",
    id: 2
    },
    {
    nombre: "computadora",
    id: 3
    }
]

/* quiero un array de strings, cada string deben ser <div>nombre_del_string</div> */

const mapeo_objetos = objetos.map(function (objetos){
    return "<div>" + objetos.nombre + "</div>"
})

console.log(mapeo_objetos)

const resultado_x = objetos.map(function (objetos){
    return false
})
console.log(resultado_x)