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
  const [filtro,setFiltro] = useState("")
  const [gastosFiltro,setGastosFiltro] = useState([])
  //dinero disponible
  const [disponible, setDisponible] = useState(0)
  //agregar presupuesto
  const [agregarPresupuesto, setAgregarPresupuesto] = useState(false)
  const [agregado, setAgregado] = useState(0)
  

  const sumarAgregado=()=>{
    const actual=presupuesto+agregado
    setPresupuesto(actual)
    setDisponible(disponible+agregado)
  }

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)
      setTimeout(() => {
        setAnimarModal(true)
      }, 500)
    }
  }, [gastoEditar])

  //este useeffect se ejecuta cada vez que presupuesto cambia
  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? 0)
  }, [presupuesto])

  useEffect(()=>{
    localStorage.setItem("gastos" , JSON.stringify(gastos)??0)
  },[gastos])

  
  //este useeffect se ejecuta cada vez que filtro cambia
  useEffect(()=>{
    if(filtro){
    const gastosFiltrados = gastos.filter( gasto => gasto.categoria===filtro)
    setGastosFiltro(gastosFiltrados)
  }
  },[filtro])

  //este useeffect se ejecuta una vez cuando llenamos el primer input con un presupuesto
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
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresu={isValidPresu}
        setIsValidPresu={setIsValidPresu}
        disponible={disponible}
        setDisponible={setDisponible}
        agregarPresupuesto={agregarPresupuesto}
        setAgregarPresupuesto={setAgregarPresupuesto}
        agregado={agregado}
        setAgregado={setAgregado}
        sumarAgregado={sumarAgregado}
      />

      {isValidPresu && (
        <>
          <main>
            <Filtros
            filtro={filtro}
            setFiltro={setFiltro}
            />
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltro={gastosFiltro}
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
        disponible={disponible}
      />}
    </div>
  )
}

export default App
