/* Funciones Nativas */ /* funcion nativa: es una fucion que se puede llamar sin que haya sido programada por nosotros, viene con el lenguaje */
/* si una funcion no retorna nada, retorna undefined */


/* isNaN(), es una funcion nativa que devuelve true o false, segun si es NaN o no */
console.log(isNaN(8))

/* alert(), es una funcion nativa que recive un string y lo muestra en forma de pop up en la pagina. No retorna nada */

/* alert("holas") */

/* typeof(), nos dice que tipo de dato es el que ingresamos */

console.log(typeof(3 + "")) /* string */

/* prompt(), es una funcion nativa que recibe un mensaje y devuelve el valor ingresado por el usuario, en forma de string si devolvio algo, en forma de null si cancelo el prompt, o un empty string si devuelve un espacio vacio */

let variable = prompt("edad") /* esta variable guarda el retorno de prompt */
variable = Number(variable) /* transforma el dato recibido a number */

console.log(variable) /* imprime en consola el contenido de la variable */

/* parseInt(), transforma un float en entero, truncandolo, es decir, "redondeandolo" para abajo. Si no se puede transformar, devuelve NaN */
/* parseFloat(), permite recibir un valor decimal. Si no se puede transformar, devuelve NaN */