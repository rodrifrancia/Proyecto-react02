import { useState, useEffect } from 'react'
import { generarId } from './helpers'
import Filtros from './assets/Filtros'
import Header from './assets/Header'
import Modal from './assets/Modal'
import ListadoGastos from './assets/ListadoGastos'
import iconoNuevoGasto from "./img/nuevo-gasto.svg"

function App() {

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto")) ?? 0
  )
  const [isValidPresu, setIsValidPresu] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState(
    localStorage.getItem("gastos") ? JSON.parse(localStorage.getItem("gastos")) :[]
  )
  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)
      setTimeout(() => {
        setAnimarModal(true)
      }, 500)
    }
  }, [gastoEditar])

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? 0)
  }, [presupuesto])

  useEffect(()=>{
    localStorage.setItem("gastos" , JSON.stringify(gastos)??0)
  },[gastos])

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem("presupuesto") ?? 0)
    if (presupuestoLS > 0) {
      setIsValidPresu(true)
    }
  }, [])


  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})
    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }

  const guardarGasto = (gasto) => {

    if (gasto.id) {
      //editando
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ?
        gasto : gastoState)
      setGastos(gastosActualizados)
      setGastoEditar({})
    } else {
      //nuevo gasto
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }

    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)

    }, 500)
  }

  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    //console.log(gastosActualizados)
    setGastos(gastosActualizados)
  }

  return (
    <div className={modal ? 'fijar' : ""}>

      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresu={isValidPresu}
        setIsValidPresu={setIsValidPresu}
      />

      {isValidPresu && (
        <>
          <main>
            <Filtros/>
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
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
        gastoEditar={gastoEditar}
        setGastoEditar={setGastoEditar}
      />}
    </div>
  )
}

export default App
