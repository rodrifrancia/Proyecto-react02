import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'
import AgregarPresu from './AgregarPresu'

const Header = ({
    presupuesto,
    setPresupuesto,
    isValidPresu,
    setIsValidPresu,
    gastos,
    setGastos,
    disponible,
    setDisponible,
    agregarPresupuesto,
    setAgregarPresupuesto,
    agregado,
    setAgregado,
    sumarAgregado
    }) => {
    

    return (
        <header>
            <h1>Planificador de Gastos</h1>

            {isValidPresu?(
            <ControlPresupuesto 
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            gastos={gastos}
            setGastos={setGastos}
            disponible={disponible}
            setDisponible={setDisponible}
            setIsValidPresu={setIsValidPresu}
            agregarPresupuesto={agregarPresupuesto}
            setAgregarPresupuesto={setAgregarPresupuesto}
            agregado={agregado}
            setAgregado={setAgregado}
            sumarAgregado={sumarAgregado}
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