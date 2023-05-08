import React, { useState } from 'react'
import btModal from "../img/cerrar.svg"
import Mensaje from './Mensaje'


const AgregarPresu = ({
    setAgregarPresupuesto,
    agregado,
    setAgregado,
    sumarAgregado,
    mensajeState,
    setMensajeState,
    presupuesto,
    disponible
    }) => {

    const [mensaje3, setMensaje3] = useState("")
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(agregado<=0){
            setMensaje3("Ingrese un valor mayor a 0")
        }else{
        sumarAgregado()
        setAgregarPresupuesto(false)
        if(mensajeState){
            setMensajeState(false)
        }
    }
    }

    return (
        <div className='modal modal2'>
            <div className='cerrar-modal'>
                <img src={btModal}
                    alt="cerrar modal"
                    onClick={()=>setAgregarPresupuesto(false)}
                />
            </div>
            <div className='contenedor-modal2'>
                <div className='form-modal2'>
                    <h2>¿Cuanto presupuesto desea agregar?</h2>
                    <p><span>Presupuesto actual: </span>{presupuesto}</p>
                    <p><span>Disponible: </span>{disponible}</p>
                    {mensaje3 && <Mensaje tipo="error-oscuro">{mensaje3}</Mensaje>}
                    <form action="">
                        <input type="number"
                        placeholder='Escriba el monto'
                        value={agregado}
                        onChange={e=>setAgregado(Number(e.target.value))}
                        />
                        <button type='submit'
                        onClick={handleSubmit}
                        >Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AgregarPresu