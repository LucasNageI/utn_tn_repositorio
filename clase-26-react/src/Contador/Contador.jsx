import React, { useState } from 'react'

export const Contador = ({limit}) => {
    const [valor, setContador] = useState(1)

    console.log(limit)

    const handleIncrementar = () => {
        if(valor !== limit){
            setContador(valor + 1)
        }
    }

    const handleDecrementar = () => {
        if(valor >= 1){
            setContador(valor - 1)
        }
    }
    return (
        <div>
            {
                valor === 1
                ? (
                    <>
                    <button onClick={handleIncrementar}>+</button>
                    <button>Comprar</button>
                    <button onClick={handleDecrementar}>-</button>
                    </>
                )

                : (<>
                <button onClick={handleIncrementar}>+</button>
                <span>Contador: {valor}</span>
                <button onClick={handleDecrementar}>-</button>
                </>)
            }
        </div>
    
      )

}
