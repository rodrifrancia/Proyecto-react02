import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
//import { formatearFecha } from "../helpers"
import { convertirFecha } from "../helpers"
import iconoAhorro from "../img/icono_ahorro.svg"
import iconoCasa from "../img/icono_casa.svg"
import iconoComida from "../img/icono_comida.svg"
import iconoGastos from "../img/icono_gastos.svg"
import iconoOcio from "../img/icono_ocio.svg"
import iconoSalud from "../img/icono_salud.svg"
import iconoSuscrip from "../img/icono_suscripciones.svg"

const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {

    const iconosCategoria = {
        ahorro: iconoAhorro,
        comida: iconoComida,
        casa: iconoCasa,
        gastos: iconoGastos,
        ocio: iconoOcio,
        salud: iconoSalud,
        suscripciones: iconoSuscrip
    }

    const { nombre, cantidad, categoria, id, fecha } = gasto

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEditar(gasto)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                onClick={() => eliminarGasto(id)}
                destructive={true}
                >
            </SwipeAction>
        </TrailingActions>
    )
    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className='gasto sombra'>
                    <div className='contenido-gasto'>
                        <img src={iconosCategoria[categoria]} alt="Icono gasto" />
                        <div className='descripcion-gasto'>
                            <p className='categoria'>{categoria}</p>
                            <p className='nombre-gasto'>{nombre}</p>
                            <p className='fecha-gasto'>
                                Agregado el : {""}
                                <span>{convertirFecha(fecha)}</span>

                            </p>
                        </div>
                    </div>
                    <p className='cantidad-gasto'>{cantidad}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Gasto