import { useState } from 'react'
import Header from './assets/Header'
import Modal from './assets/Modal'
import iconoNuevoGasto from "./img/nuevo-gasto.svg"

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresu, setIsValidPresu] = useState(false)
  const[modal,setModal] = useState(false)
  const[animarModal,setAnimarModal]=useState(false)

  const handleNuevoGasto =()=>{
    setModal(true)

    setTimeout(()=>{
    setAnimarModal(true)
    },500)
  }

  return (
    <div>
      <div>

        <Header
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresu={isValidPresu}
          setIsValidPresu={setIsValidPresu}
        />

      </div>
      {isValidPresu && (
        <div className='nuevo-gasto'>
          <img src={iconoNuevoGasto} alt="Icono nuevo gasto" onClick={handleNuevoGasto} />
        </div>

      )}

      {modal && <Modal
      setModal={setModal}
      animarModal={animarModal}
      setAnimarModal={setAnimarModal}
      />}
    </div>
  )
}

export default App
