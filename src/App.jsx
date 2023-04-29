import { useState } from 'react'
import { generarId } from './helpers'
import Header from './assets/Header'
import Modal from './assets/Modal'
import ListadoGastos from './assets/ListadoGastos'
import iconoNuevoGasto from "./img/nuevo-gasto.svg"

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresu, setIsValidPresu] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState([])

  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }

  const guardarGasto = (gasto) => {
    gasto.id = generarId()
    gasto.fecha= Date.now()
    setGastos([...gastos, gasto])
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)

    }, 500)
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
        <>
          <main>
            <ListadoGastos
            gastos={gastos}
            />
          </main>
          <div className='nuevo-gasto'>
            <img src={iconoNuevoGasto} alt="Icono nuevo gasto" onClick={handleNuevoGasto} />
          </div>
        </>
      )}

      {modal && <Modal
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
      />}
    </div>
  )
}

export default App
