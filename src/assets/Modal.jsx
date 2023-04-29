import React from 'react'
import btModal from "../img/cerrar.svg"
import Mensaje from './Mensaje'
import { useState } from 'react'

const Modal = ({ setModal, animarModal, setAnimarModal,guardarGasto }) => {

    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [categoria, setCategoria] = useState("")
    const [mensaje,setMensaje]=useState("")
    

    

    const handleSubmit = (e) =>{
        e.preventDefault()
        if([nombre,cantidad,categoria].includes("")){
            setMensaje("Todos los campos son obligatorios")
            return;
        }
        guardarGasto({nombre,cantidad,categoria})
    }

    

    const ocultarModal = (e) => {

        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)

        }, 500)
    }
    
    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img src={btModal}
                    alt="cerrrar modal"
                    onClick={ocultarModal} />
            </div>
            <form action="" onSubmit={handleSubmit}
            className={`formulario ${animarModal ? "animar" : "cerrar"}`}>

                <legend>Nuevo Gasto</legend>

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
                <input type="submit" value="añadir gasto" />
            </form>
        </div>
    )
    }

export default Modal