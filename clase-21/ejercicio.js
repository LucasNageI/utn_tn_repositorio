const form_html = document.getElementById("form")
const error_username_html = document.querySelector(".error-username")
const error_email_html = document.querySelector(".error-email")
const error_password_html = document.querySelector(".error-password")
const exito_html = document.querySelector(".exito")

const validarUsername = (username) => username != username.toLowerCase() && username.length > 4 && username.includes("-")
const validarEmail = (email) => !/^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/.test(email)
const validarPassword = (password) => password != password.toLowerCase() && password.includes("#")

const loginHandler = (event) => {
    
    event.preventDefault()

    const username = event.target.username.value
    const email = event.target.email.value
    const password = event.target.password.value

    if(validarUsername(username) === false){
        error_username_html.innerText = "error en el nombre de usuario"
        exito_html.innerText = ""
    }
    else {
        error_username_html.innerText = ""
    }
    if(validarEmail(email) === true){
        error_email_html.innerText = "error en el email"
        exito_html.innerText = ""
    }
    else {
        error_email_html.innerText = ""
    }
    if(validarPassword(password) === false){
        error_password_html.innerText = "error en la contraseña"
        exito_html.innerText = ""
    }
    else {
        error_password_html.innerText = ""
    }
    if(validarUsername(username) === true && validarEmail(email) === false && validarPassword(password) === true){
        exito_html.innerText = "exito"
    }
}

form_html.addEventListener("submit", loginHandler)