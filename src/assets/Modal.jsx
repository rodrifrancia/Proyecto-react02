import React from 'react'
import btModal from "../img/cerrar.svg"

const Modal = ({ setModal,animarModal,setAnimarModal }) => {

    const ocultarModal = (e) => {
        
        setAnimarModal(false)
     setTimeout(()=>{
        setModal(false)
        
     },500)
    }
    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img src={btModal}
                    alt="cerrrar modal"
                    onClick={ocultarModal} />
            </div>
            <form action="" className={`formulario ${animarModal? "animar":"cerrar"}` }>
                <legend>Nuevo Gasto</legend>
                <div className='campo'>
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input type="text" id="nombre" placeholder='Añade el nombre del gasto'/>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input type="number" id="cantidad" placeholder='Añade la cantidad del gasto'/>
                </div>
            </form>
        </div>
    )
}

export default Modal