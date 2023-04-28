import React from 'react'

const ControlPresupuesto = ({ presupuesto }) => {

    const formatearCantidad = (cant)=>{
        return cant.toLocaleString("en-US",{
            style:"currency",
            currency:"USD"
        })
    }
    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Grafica</p>
            </div>
            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span> {formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Gastado: </span> {formatearCantidad(presupuesto)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto