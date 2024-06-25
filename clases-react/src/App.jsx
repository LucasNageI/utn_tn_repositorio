import React from 'react'
import {ProfileCard} from "./ProfileCard.jsx"

function App() { /* importante que el nombre de la funcion empiece con mayuscula */
    const persona_1 = {
        nombre: "juan",
        apellido: "fernandez",
        edad: "20",
        ubicacion: "calle453"
    }
    const persona_2 = {
        nombre: "pepe",
        apellido: "suarez",
        edad: "18",
        ubicacion: "calle123"
    }
return (
    <div>
      <ProfileCard persona={persona_1}/>
      <ProfileCard persona={persona_2}/>
    </div>
  )
}

export default App