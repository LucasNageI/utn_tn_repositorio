import React, { useState } from "react"

function App() { /* usar a document lo menos posible, debido al virtual DOM, que es menos pesado */

    const [valor, setValor] = useState(1) /* crea un estado */

    /* retorna un array donde el primer elemento es el valor actual del estado, y el segundo es una funcion para modificar el valor actual del estado */
    /* debe recibir el valor inicial */
    /* los estados se crean dentro del componente */

    const incrementar = () => {/* el valor del estado siempre cambia dentro de la funcion setter */
        setValor(valor + 1)
    }

  return (
        <div>
            <span>Contador {valor}</span>
            <button onClick={incrementar}>Incrementar</button>
        </div>
  )
}

export default App