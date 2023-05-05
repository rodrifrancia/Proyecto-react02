import React from 'react'
import btModal from "../img/cerrar.svg"
import Mensaje from './Mensaje'
import { useState, useEffect } from 'react'
import MensajeDisponibilidad from './MensajeDisponibilidad'

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar, disponible }) => {

    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [categoria, setCategoria] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [mensaje2, setMensaje2] = useState("")
    //state para editar
    const [id, setId] = useState("")
    const [fecha, setFecha] = useState("")



    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if ([nombre, cantidad, categoria].includes("")) {
            setMensaje("Todos los campos son obligatorios")
            return;
        }
        if (cantidad > disponible) {
            setMensaje("No puedes gastar mas dinero del disponible")
        }else if(cantidad ==0){
            setMensaje("Ingresa un monto mayor a 0")
        }else {
            guardarGasto({ nombre, cantidad, categoria, id, fecha })
        }
    }



    const ocultarModal = (e) => {

        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {
            setModal(false)

        }, 500)
    }
    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img src={btModal}
                    alt="cerrar modal"
                    onClick={ocultarModal} />
            </div>
            <form action="" onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : "cerrar"}`}>

                <legend>{gastoEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"}</legend>

                {mensaje && <Mensaje tipo="error">{mensaje} </Mensaje>}

                <div className='campo'>
                    <label htmlFor="nombre">Nombre Gasto</label>

                    <input type="text" id="nombre"
                        placeholder='Añade el nombre del gasto'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)} />

                    <label htmlFor="cantidad">Cantidad</label>
                    <input type="number" id="cantidad"
                        placeholder='Añade la cantidad del gasto'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))} />

                    <label htmlFor="cantegoria">Categoria</label>
                    <select name="categoria"
                        id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}>
                        <option value="">Seleccione</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input type="submit" value={gastoEditar.nombre ? "Guardar Cambios" : "Añadir Gasto"} />
                {mensaje2 && <MensajeDisponibilidad tipo="alerta2">
                    {mensaje}
                </MensajeDisponibilidad>}
            </form>
        </div>
    )
}

export default Modal