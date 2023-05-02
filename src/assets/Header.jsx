import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({presupuesto,setPresupuesto,isValidPresu,setIsValidPresu}) => {
    

    return (
        <header>
            <h1>Planificador de Gastos</h1>

            {isValidPresu?(
            <ControlPresupuesto presupuesto={presupuesto}></ControlPresupuesto>
            ):(
            <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresu={setIsValidPresu}
            />  
            )}
            
        </header>
    )
}

export default Header