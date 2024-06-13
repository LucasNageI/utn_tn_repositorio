/* sincronia */

console.log("hola")

console.log("chau")

/* primero se ejecuta la linea 3, despues la linea 5 */

/* callstack */

/* prompt(alert()) */

/* el primero en llamarse es el ultimo en ejecutarse, el ultimo en llamarse es el primero en ejecutarse */
/* primero el alert(), despues el prompt() */

/* Fetch */

/* con fetch se pueden acceder a recursos externos a mi pagina */



/* fetch es codigo asincronico, devuelve una promesa */



/* callstack:
primero response
despues console.log()
*/

/* fetch es asincronico, entonces el response va a ser pending */

/* manera de crear funcion asincronica con metodo tradicional */

/* async function obtenerPosts () {
    const URL_API = "https://jsonplaceholder.typicode.com"

    const response = await fetch(URL_API + "/posts", {
        method: "GET"
    })

    console.log("esta es la respuesta: ", response)
    console.log("resuelto")
} */

/* obtenerPosts() */

/* manera de crear una funcion asincronica con arrow function */

const obtenerUsuarios =  async () => { /* dice que es una async function (funcion asincrona) */
    const URL_API = "https://jsonplaceholder.typicode.com"

    const response = await fetch(URL_API + "/users", { /* await indica que se espere a que fetch responda */
        method: "GET" /* si no se indica el metodo, por defecto es GET */
    })
    const data = await response.json() /* estas diciendo que se espere a que devuelva el json de la respuesta */
    console.log(data)
    console.log("esta es la respuesta: ", response)
    console.log("resuelto")
}

obtenerUsuarios()

/* las 2 funciones se ejecutan al mismo tiempo, no tienen un orden */

const div_html = document.getElementById("div")

div_html.innerHTML = "<h1> Cargando... </h1>"

const obtenerUserPorID = async (id) => {  
    const URL_API = "https://jsonplaceholder.typicode.com"
    const respuesta = await fetch(URL_API + `/users/${id}`, {
        method: "GET"
    })
    
    const user_data = await respuesta.json()

        div_html.innerHTML = `
        <h1> ${user_data.name} </h1>
        <ul>
            <li><span> phone: ${user_data.phone} </span></li>
            <li><span> email: ${user_data.email} </span></li>
        </ul>
        `
}

obtenerUserPorID(1)