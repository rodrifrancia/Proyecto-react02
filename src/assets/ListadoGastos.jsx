import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltro }) => {
    return (
        <div className='listado-gastos contenedor'>
            {filtro ?
                (
                    <>
                        <h2>{gastosFiltro.length ? "Gastos" : "Aún no hay gastos en esta categoria"}</h2>
                        {gastosFiltro.map(gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
                ) : (
                    <>
                        <h2>{gastos.length ? "Gastos" : "Aún no hay gastos registrados"}</h2>
                        {gastos.map(gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
                )}
        </div>
    )
}

export default ListadoGastos