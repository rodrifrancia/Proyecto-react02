import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import AgregarPresu from './AgregarPresu'

const ControlPresupuesto = ({
    presupuesto,
    setPresupuesto,
    gastos,
    setGastos,
    disponible,
    setDisponible,
    setIsValidPresu,
    agregarPresupuesto,
    setAgregarPresupuesto,
    agregado,
    setAgregado,
    sumarAgregado,
    mensajeState,
    setMensajeState
    }) => {


    const [gastado, setGastado] = useState(0)
    const [porcentaje, setPorcentaje] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
        const totalDisponible = presupuesto - totalGastado
        setDisponible(totalDisponible)
        //Para ver el porcentaje que me queda
        //setPorcentaje(totalDisponible/presupuesto*100)

        //Para ver el porcentaje gastado
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto * 100)).toFixed(2)
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
        }, 700)
        setGastado(totalGastado)
    }, [gastos,presupuesto])

    const formatearCantidad = (cant) => {
        return cant.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }

    const handleResetApp =()=>{
        const resultado = confirm("Desea borrar todos los gastos?")
        if(resultado)
        {setPresupuesto(0)
        setGastos([])
        setIsValidPresu(false)
        }
    }

    
    return (
        <>
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: "#3B82F6",
                        trailColor: "#EBEBEB",
                        textColor: "#3B82F6"
                    })}
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`}
                />
            </div>
            <div className='contenido-presupuesto'>

                <button className='reset-app'
                onClick={handleResetApp}
                >Resetear app</button>
                
                <button className='agregar-presu'
                onClick={()=>setAgregarPresupuesto(true)}>
                    Agregar Presupuesto
                </button>
                <p>
                    <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span> {formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado: </span> {formatearCantidad(gastado)}
                </p>
            </div>
            
        </div>
        {agregarPresupuesto && <AgregarPresu
        setAgregarPresupuesto={setAgregarPresupuesto}
        agregado={agregado}
        setAgregado={setAgregado}
        presupuesto={presupuesto}
        disponible={disponible}
        setPresupuesto={setPresupuesto}
        sumarAgregado={sumarAgregado}
        mensajeState={mensajeState}
        setMensajeState={setMensajeState}
        />}
        </>
    )
}

export default ControlPresupuesto