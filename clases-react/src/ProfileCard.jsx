import React from "react"

export const ProfileCard = ({persona}) => { /* desestructuracion */
    const {nombre, apellido, edad, ubicacion} = persona
    return(
        <div>
            <h1>Nombre: {nombre}</h1>
            <span>Apellido: {apellido}</span>
            <span>Edad: {edad}</span>
            <span>Ubicacion: {ubicacion}</span>
        </div>
    )
}