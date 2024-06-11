const form_html = document.getElementById("form")
const error_text_html = document.getElementById("error-text")

/* form_html.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(form_html.username.value)
}) */

form_html.addEventListener("submit", (event) => {
    event.preventDefault()
    const username = event.target.username.value
    console.log(username)
    if(username.length < 5) {
        error_text_html.innerText = "error, username no valido"
    }
    else{
        error_text_html.innerText = ""
    }
})

