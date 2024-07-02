/* todos los archivos jsx deben importar react */
import React from 'react' 

/* se usa reactDOM para crear el dom virtual (de react) */
import ReactDOM from 'react-dom/client'

/* importa el componente App */
/* un componente es una funcion que retorna JSX (es un codigo parecido a HTML) */
import App from './App.jsx'

import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <App /> /* esta es la invocacion de un componente */
)