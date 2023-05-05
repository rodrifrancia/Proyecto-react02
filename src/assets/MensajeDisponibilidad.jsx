import React from 'react'

const MensajeDisponibilidad = ({children,tipo}) => {
  return (
    <div className='divAlerta'>
        <p className={tipo}>{children}</p>
    </div>
  )
}

export default MensajeDisponibilidad