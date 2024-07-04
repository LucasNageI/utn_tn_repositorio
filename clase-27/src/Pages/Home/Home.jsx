import React from 'react'
import { Navbar } from '../../Components'
import { Link } from 'react-router-dom'
import { lista_de_productos } from '../product_list'

const Home = () => {

  return (
    <div>
        <Navbar />
        <h1>Lista de Productos</h1>
        <div>
            {lista_de_productos.map(producto => {
                return(
                <div key={producto.id}>
                    <h2>{producto.titulo}</h2>
                    <span>{producto.precio}</span>
                    <span>{producto.categoria}</span>
                    <Link to={"/Detail/" + producto.id}>Detalle</Link>
                </div>
            )})}
        </div>
    </div>

  )
}

export default Home