import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({presupuesto,setPresupuesto,isValidPresu,setIsValidPresu,gastos}) => {
    

    return (
        <header>
            <h1>Planificador de Gastos</h1>

            {isValidPresu?(
            <ControlPresupuesto 
            presupuesto={presupuesto}
            gastos={gastos}
            >

            </ControlPresupuesto>
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