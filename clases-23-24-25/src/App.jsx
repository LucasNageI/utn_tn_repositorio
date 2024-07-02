import React from 'react'
import { ColorCardList } from './ColorCards'
import { useState } from 'react'


let nombre = 'pepe'
const obtenerNombre = () => 'pepe'


const colors_card_info = [
    {
        likes: 9,
        fecha: '9/12/2018',
        colores: ['#EEEDEB', '#E6B9A6', '#939185', '#2F3645']
    },
    {
        likes: 12,
        fecha: '1 hora',
        colores: ['#36BA98', '#E9C46A', '#F4A261', '#E76F51']
    },
    {
        likes: 2018,
        fecha: '2 dias',
        colores: ['#91DDCF', '#F7F9F2', '#7776B3', '#E2BBE9']
    },
    {
        likes: 4,
        fecha: '1 dia',
        colores: ['#219C90', '#059212', '#D8EFD3', '#78ABA8']
    }
]  


const App = () => {
    const sumar = () => 1 + 1
    const persona_1 = {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 89,
        ubicacion: 'calle 123'
    }
    const persona_2 = {
        nombre: 'juan',
        apellido: 'Ruiz',
        edad: 48,
        ubicacion: 'Av Scal 123'
    }

    const [colors, setColorCardInfo] = useState()

    /* const personas = ['pepe', 'juan', 'maria']
    const listaJSXPersonas = personas.map((persona) => {
        return (
            <div>{persona}</div>
        )
    }) */

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div>
                <ColorCardList colors_info={colors_card_info}/>

            </div>
            <div>
                <form>
                    <h2>Cree su propia carta</h2>
                    <div>
                        <label htmlFor="input">Ingrese color 1</label>
                        <input id="color-1" name="color-1" type="text" value={"#"}/>
                    </div>
                    <div>
                        <label htmlFor="input">Ingrese color 2</label>
                        <input id="color-2" name="color-2" type="text" value={"#"}/>
                    </div>
                    <div>
                        <label htmlFor="input">Ingrese color 3</label>
                        <input id="color-3" name="color-3" type="text" value={"#"}/>
                    </div>
                    <div>
                        <label htmlFor="input">Ingrese color 4</label>
                        <input id="color-4" name="color-4" type="text" value={"#"}/>
                    </div>
                    <input type="submit" onSubmit={handleSubmit} />
                </form>
            </div>
        </>
    )
}

export default App