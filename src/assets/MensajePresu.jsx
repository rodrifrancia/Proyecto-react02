import React from 'react'

const MensajePresu = ({mensajeState, setMensajeState,setAgregarPresupuesto}) => {
  return (
    <div className='mensaje2'>
      <p>¿Desea agregar más presupuesto?</p>
      <button className='buttonSi'
      onClick={()=>setAgregarPresupuesto(true)}
      >SI</button>

      <button className='buttonNo'
      onClick={() =>setMensajeState(false)}
      >NO</button>
    </div>
  )
}

export default MensajePresu