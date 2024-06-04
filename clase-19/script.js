/* DOM: Document Object Model */

console.dir(document)
/* .dir muestra en consola el valor en un formato mas legible */

/* document es una variable global que representa en JS a HTML como objeto*/

/* getElementById es un metodo que permite obtener un elemento del document por medio del ID */
const titulo = document.getElementById("titulo") /* se guardan con const porque se guardan por objeto */

const subtitulo = document.getElementById("subtitulo") /* como subtitulo no existe, devuelve null */

console.dir(titulo)

/* PROPIEDADES DE HTMLELEMENTS */

titulo.innerText = "hola" /* modifica el texto interno del elemento que contiene como id "titulo" */

const caja = document.getElementById("caja")

const producto = {
    nombre: "tv samsung",
    descripcion: "lorem ipsum",
    precio: "$800"
}

caja.innerHTML = `
    <h2>${producto.nombre}</h2>
    <p>${producto.descripcion}</p>
    <span>${producto.precio}</span>
` /* inserta elementos a otro elemento de HTML */

const buttonProduct = document.createElement("button") /* crea un elemento */

console.dir(buttonProduct)

caja.appendChild(buttonProduct) /* hace que "buttonProduct" sea hijo de "caja" */


const array_de_productos = [
    {
        nombre: "tv samsung",
        descripcion: "lorem ipsum",
        precio: "$800"
    },
    {
        nombre: "tv samsung",
        descripcion: "lorem ipsum",
        precio: "$800"
    },
    {
        nombre: "tv samsung",
        descripcion: "lorem ipsum",
        precio: "$800"
    },
    {
        nombre: "tv samsung",
        descripcion: "lorem ipsum",
        precio: "$800"
    }
]


const product_container_HTML = document.getElementById("product-container")

let products_list = ""

for (const producto of array_de_productos) {
    products_list = products_list + `
    <h2>${producto.nombre}</h2>
    <p>${producto.descripcion}</p>
    <span>${producto.precio}</span>
    `
}
product_container_HTML.innerHTML = products_list /* esto recorre el array de objetos, lo renderiza, y los inserta en el document */