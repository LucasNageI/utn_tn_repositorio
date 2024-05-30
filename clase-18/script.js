const historial = 
[
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 3 
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1 
    },
]

function renderizarHIstorial (historialRecibido) { 
    let listaHistorial = ""
    for (const item of historialRecibido) { /* por cada elemento del array, ejecuta lo que esta dentro del forof */
        listaHistorial = listaHistorial + `
        accion: ${item.accion}
        operacion: ${item.operacion}
        numeroA: ${item.a}
        numeroB: ${item.b}
        resultado: ${item.resultado}
        `
    }/* al valor anterior de listaHistorial, es decir "" le agrega las keys de cada elemento del array */
    return listaHistorial
}

console.log(renderizarHIstorial(historial))

const objeto_a_agregar = {
    accion: 'CALCULAR',
    operacion: '+',
    a: 5,
    b: 2,
    resultado: 7
}

function agregarAlHistorial(elementoHistorial) {
    historial.push(elementoHistorial)
    let elemento_en_string = JSON.stringify(elementoHistorial)
    localStorage.setItem("historial", elemento_en_string)
}

function obtenerHistorial() { 
    let historial_localStorage = localStorage.getItem("historial")
    return JSON.parse(historial_localStorage)
}

console.log(obtenerHistorial())

/* localStorage y sessionStorage */ 

/* siempre tienen que ser valores string */

/* METODOS (son iguales para local y para session storages) */

let datoImportante = "el mate se toma amargo"

localStorage.setItem("importante", datoImportante) /* recibe una key y un value, y los guarda o los reemplaza en la tabla */

localStorage.getItem("importante") /* sirve para obtener el valor de una key, solo se ingresa el nombre de la key, si la key no existe, devuelve null */

localStorage.removeItem("importante") /* elimina un valor mediante la key, devuelve undefined, porque no retorna nada */

/* localStorage.clear() */ /* limpia el localStorage, o el sessionStorage */

/* JSON: JavaSctipt Object Notation, es una variable global que usamos para acceder a los metodos .parse() y .stringify()
    Reglas de JSON:
        Si quiero escribir un array, []
        Si quiero escribir un objeto, {}
        Si quiero escribir un string, ""(solo comillas dobles)
        Los numeros, boolean, null y undefined se escriben igual
*/

/* JSON.parse() */ /* transforma al formato objeto de JS */
/* JSON.stringify() */ /* transforma al formato string */

let string = '{"username": "pepe"}' /* tiene que estar dentro de comillas simples */ /* este string esta escrito en formato json, es decir, es transformable a objeto de js */

let string_como_objeto = JSON.parse(string)
console.log(string_como_objeto)

const objeto = { /* todos los objetos se pueden transformar a string con JSON.stringify() */
    username: "lucas",
    edad: "16"
}

let objeto_stringified = JSON.stringify(objeto) /* este es un string que se puede volver a trasformar a objeto */
console.log(objeto_stringified)

const historial_formato_string = JSON.stringify(historial)
alert(historial_formato_string)

