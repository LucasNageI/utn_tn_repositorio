import React from "react"

/* props = {tarjeta: {objeto tarjeta}} */
export const ColorCard = ({ tarjeta }) => {
    const { likes, fecha, colores } = tarjeta
    return (
        <div className="color-card">
            <div className="colors">
                <div className="color" style={{ backgroundColor: colores[0] }}></div>
                <div className="color" style={{ backgroundColor: colores[1] }}></div>
                <div className="color" style={{ backgroundColor: colores[2] }}></div>
                <div className="color" style={{ backgroundColor: colores[3] }}></div>
            </div>
            <div className="color-card-controls">
                <button className="btn-like"><i className="bi bi-heart"></i> <span>{likes}</span></button>
                <span className="time">{fecha}</span>
            </div>
        </div>
    )
}

/* Este componente recibe el array de colores */
export const ColorCardList = ({colors_info}) => {
    return (
        <>
            {
                colors_info.map((color_info) => <ColorCard tarjeta={color_info}/>)
            }
        </>
    )
}

/* 
Los estilos inline en react se escriben como objetos 
*/