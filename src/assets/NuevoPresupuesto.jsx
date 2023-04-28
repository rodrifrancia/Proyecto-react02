import React, { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto,setPresupuesto,setIsValidPresu}) => {

    const[mensaje,setMensaje] = useState("")

    const handleValidar =(e)=>{
        e.preventDefault();
        if(!presupuesto || presupuesto<0 ){

            setMensaje("No es un presupuesto válido")
            setPresupuesto(0)
            return
        }
            setMensaje("")
            setIsValidPresu(true)
            
        


    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form className='formulario' action="">
                <div className='campo'>
                    <label htmlFor="">Definir Presupuesto</label>
                    <input className='nuevo-presupuesto' type="number" 
                    placeholder='Añade tu presupuesto'
                    value={presupuesto}
                    onChange={e=> setPresupuesto(Number(e.target.value))} />
                </div>
                <input type='submit' value="añadir" onClick={handleValidar}></input>
                {mensaje && <Mensaje tipo="error"><p>{mensaje}</p></Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto