import { useDispatch, useSelector } from 'react-redux';
import {
    // diningStartLoading,
    changeStateTable
} from '../../actions/diningUiAction';


import "./diningUiStyle.css"

export const TablesCard = ({
    Id,
    NumeroMesa,
    CapacidadMesa,
    IdEmpleado,
    RutEmpleado,
    NombreEmpleado,
    ApellidoEmpleado,
    EstadoMesa
}) => {

    const dispatch = useDispatch();

    const { active } = useSelector(state => state.diningRoom);

    const table = {
        CapacidadMesa: CapacidadMesa,
        IdEmpleado: IdEmpleado,
        IdEstadoMesa: EstadoMesa
    }

    console.log(active.btn1)


    const handleClickEstadoHabilitada = () => {

        table.IdEstadoMesa = 1;
        console.log(table);
        dispatch(changeStateTable(NumeroMesa, table));
    }

    const handleClickEstadoOcupada = () => {

        const active = {
            btn1: { state: false, css: "boton-state-deactive" },
            btn2: { state: true, css: "boton-state-active" },
            btn3: { state: false, css: "boton-state-deactive" },
            btn4: { state: false, css: "boton-state-deactive" }
        }

        table.IdEstadoMesa = 3;
        console.log(table);
        dispatch(changeStateTable(NumeroMesa, table, active));
    }

    const handleClickEstadoDeshabilitada = () => {

        table.IdEstadoMesa = 2;
        console.log(table);
        dispatch(changeStateTable(NumeroMesa, table));
    }

    const handleClickEstadoReservada = () => {

        table.IdEstadoMesa = 4;
        console.log(table);
        dispatch(changeStateTable(NumeroMesa, table));
    }


    return (

        <div className="padingAll" >

            <div >
                <div className="centered">
                    <div>
                        <span id="" >Mesa Nº {NumeroMesa}</span>
                    </div>

                </div>
                <div >
                    <button
                        className={active.btn1.css}
                        type="submit"
                        onClick={handleClickEstadoHabilitada}
                        disabled={active.btn1.state}
                    >
                        Habilitada
                    </button>
                    <button
                        className={active.btn2.css}
                        type="submit"
                        onClick={handleClickEstadoOcupada}
                        disabled={active.btn2.state}
                    >
                        Asignada
                    </button>
                    <button
                        className={active.btn3.css}
                        type="submit"
                        onClick={handleClickEstadoDeshabilitada}
                        disabled={active.btn3.state}
                    >
                        Deshabilitada
                    </button>
                    <button
                        className={active.btn4.css}
                        type="submit"
                        onClick={handleClickEstadoReservada}
                        disabled={active.btn4.state}
                    >
                        Reservada
                    </button>
                </div>


            </div>
        </div>

    )
}
