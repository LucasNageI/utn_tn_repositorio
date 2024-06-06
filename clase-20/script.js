/* arrow functions */

const suma = (a, b) => a + b
console.log(suma(1, 2))

/* Eventos */

function alertar (){
    console.log("hola click 3")
}

const btn_click = document.getElementById("btn")

btn_click.onclick = function () {
    alert("hola click 2")
}

const btn_click_3 = document.querySelector(".btn-3")

/* .addeventlistener() es un metodo para agregar funciones a nuestros eventos, recibe 2 parametros, el evento, y una funcion*/
btn_click_3.onclick = () => {
    console.log("hola desde una arrow function")
}
btn_click_3.addEventListener("click", alertar)/* desde callback */
btn_click_3.addEventListener("click", function(){console.log("hola click 3 desde funcion anonima")})/* desde funcion anonima */

/* estas 2 formas son validas */

const formulario_html = document.getElementById("formulario")

function handleSubmit (evento) {
    evento.preventDefault()
    console.log(formulario_html.dato.value)/* se esta accediendo al valor del input */
}

formulario_html.addEventListener("submit", handleSubmit) /* a la funcion que se le pasa al addEventListener se le llama handler */