/* calculadora */

/* tener soporte para suma y resta, opcion de cancelar, tiene que haber historial, y se tiene que crear un usuario al entrar a la calculadora */

/* utilidades */

/* validaciones:
solo tiene que ser suma y resta
el usuario tiene que tener email validado
*/

/* 
para los ingresos de datos: prompt()
para el egreso de datos: alert()
*/

/* LOGIN */

function validarEmail (email){
    return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email))
}
function validarPassword (password){
    return (password.toLowerCase === password || password.length >= 6)
}

function obtenerDato (data) {
    let dato = prompt(data.mensaje)
    while(!data.validacion(dato)){
        dato = prompt(data.error)
    }
    return dato
}

/* diccionario */

const DATOS = {
    EMAIL: {
        mensaje: "ingrese un email",
        error: "error, intente nuevamente",
        validacion: validarEmail
    },

    PASSWORD: {
        mensaje: "ingrese una contraseña que tenga por lo menos 6 digitos y una mayuscula",
        error: "error, intente nuevamente",
        validacion: validarPassword
    }
}

function login(){
    let email = obtenerDato(DATOS.EMAIL)
    let password = obtenerDato(DATOS.PASSWORD)
    return {email: email, password: password}
}

console.log(login())


/* CALCULADORA */


let operacion_ingresada = prompt("ingrese su opeacion (+ o -)")

function validarOperacion (operacion){
    return operacion === "+" || operacion === "-"
}

while(validarOperacion(operacion_ingresada) === false){
    operacion_ingresada = prompt("error al ingresar la operacion, intente nuevamente")
}

let numero_a = parseFloat(prompt("ingrese el primer numero"))
let numero_b = parseFloat(prompt("ingrese el segundo numero"))

function validarNumeros(numeroA, numeroB){
    return numeroA != Number || numeroB != Number
}

while(validarNumeros(numero_a, numero_b) === false){
    numero_a = parseFloat(prompt("error, ingrese el primer numero"))
    numero_b = parseFloat(prompt("error, ingrese el segundo numero"))
}

function sumar(numeroA, numeroB){
    return numeroA + numeroB
}

let suma = sumar(numero_a, numero_b)

function restar(numeroA, numeroB){
    return numeroA - numeroB
}

let resta = restar(numero_a, numero_b)

if(operacion_ingresada === "+"){
    alert(suma)
}
else {
    alert(resta)
}

/* HISTORIAL */

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
    for (const item of historialRecibido) {
        listaHistorial = listaHistorial + `
        accion: ${item.accion}
        operacion: ${item.operacion}
        numeroA: ${item.a}
        numeroB: ${item.b}
        resultado: ${item.resultado}
        `
    }
    return listaHistorial
}

console.log(renderizarHIstorial(historial))