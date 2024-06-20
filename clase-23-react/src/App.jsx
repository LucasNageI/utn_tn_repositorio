import React from 'react'
import { PI, Titulos } from './funciones.jsx'

function App() { /* importante que el nombre de la funcion empiece con mayuscula */
return (
    <div>
      <h1>hola desde react </h1>
      <Carrito />
      <Titulos />
    </div>
  )
}

console.log(PI)

const Carrito = () => {
  return(
    <div>
      <h1>Carrito de compras</h1>
      <Item />
      <Item />
      <Item />
    </div>
  )
}

const Item = () => {
  return(
    <>
    <div className='div-item'>
      <h2>Nombre Producto</h2>
      <span>Cantidad: x</span>
      <button>Eliminar</button>
    </div>
    <hr />
    </>
  )
}

export default App