import React, { useEffect, useState } from 'react'
import { Navbar } from '../../Components'
import { Link } from 'react-router-dom'
import { obtenerProductos } from '../../Fetching/products.fetching'

const Home = () => {

    const [lista_de_productos, setListaProductos] = useState([])
    const [is_loading, setIsLoading] = useState(true)
    const [searchString, setSearchString] = useState("")

    useEffect( /* recibe 2 parametros, una callback, y un array */
        () => { /* aca va la funcionalidad que queremos controlar */
            setTimeout(
                () => {
                    obtenerProductos()
                    .then(
                        (productos)=> {
                            console.log("productos", productos)
                            setListaProductos(productos)
                            setIsLoading(false)
                        }
                    )   
                },
                200
            )

    }, 
    [searchString]/* un array vacio significa que se va a cargar 1 sola vez */
)

    const handleSearchString = (e) => {
        console.log(e.target.value)
        setSearchString(e.target.value)
    }

  return (
    <div>
        <input type="text" placeholder='escribi algo' onChange={handleSearchString} value={searchString}/>
        {searchString != "" ? <h1>ESCRIBIENDO</h1> : <h1>ESPERANDO</h1>}
        <Navbar />
        <h1>Lista de Productos</h1>
        <div>
            {
            is_loading
            ?<h2>Cargando</h2>
            :    lista_de_productos.map(producto => {
                    return(
                    <div key={producto.id}>
                        <h2>{producto.titulo}</h2>
                        <span>{producto.precio}</span>
                        <span>{producto.categoria}</span>
                        <Link to={"/Detail/" + producto.id}>Detalle</Link>
                    </div>
                )
            }
        )
    }

        </div>
    </div>

  )
}

export default Home