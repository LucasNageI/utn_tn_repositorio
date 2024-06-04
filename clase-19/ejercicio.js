const caja_usuario = document.getElementById("caja")

const user = {
    username: "pepito",
    password: "*******",
    adress: "Av J.J.Paso",
    email: "soypepe@gmail.com"
}

const historial = [
    {
        id: '001',
        nombre: 'tv samsung',
        fecha: '17/09/2020'
    },
    {
        id: '022',
        nombre: 'Macbook',
        fecha: '14/10/2020'
    },
    {
        id: '030',
        nombre: 'Celular motorola',
        fecha: '17/09/2021'
    },
    {
        id: '301',
        nombre: 'Zapatillas nike',
        fecha: '30/09/2023'
    }
]

const historial_container = document.querySelector("#historial-container") /* querySelector es un metodo que obtiene etiquetas de HTML como si fueran selectores de CSS, si hay un elemento que sea un ID, es mejor usar getElementById */

let lista_historial = ""

for (const historial_element of historial) {
    lista_historial = lista_historial + `
    <span><b>${historial_element.id}</b></span>
    <h3>${historial_element.nombre}</h3>
    <span>Fecha: ${historial_element.fecha}</span>
    <br>
    <hr>
    `
}

historial_container.innerHTML = lista_historial

const divs_en_clase = document.getElementsByClassName("div") /* llama a un elemento por el nombre de la clase */

for (const element of divs_en_clase) {
    const btn = document.createElement("button")
    btn.innerText = "ver publicacion"
    element.appendChild(btn)
}

/* una coleccion de elementos es un objeto iterable que guarda distintos elementos de la misma clase */

const input = document.getElementById("input")
console.log(input.value)

input.classList.add("div") /* esto le agrega la clase "div" al elemento input */

input.classList.remove("div") /* esto le saca la clase "div" al elemento input */

input.classList.toggle("mostrar") /* si la clase existe, la elimina, si no existe, la agrega */