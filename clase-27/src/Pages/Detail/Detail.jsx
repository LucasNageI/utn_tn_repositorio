import React from 'react'
import { useParams } from 'react-router-dom'
import { lista_de_productos } from '../product_list'

const Detail = () => {
    const {productId} = useParams()
    const producto = lista_de_productos.find(producto => producto.id === Number(productId))
    console.log(producto)
  return (
    <div>
            <h1>Details</h1>
            <span>ID: {producto.id}</span>
            <h3>{producto.titulo}</h3>
            <span>{producto.precio}</span><br></br>
            <span>{producto.categoria}</span>
    </div>

  )
}

export default Detail