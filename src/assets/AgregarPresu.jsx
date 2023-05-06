import React from 'react'
import btModal from "../img/cerrar.svg"

const AgregarPresu = ({setAgregarPresupuesto,agregado,setAgregado,sumarAgregado}) => {
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        sumarAgregado()
        setAgregarPresupuesto(false)
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