import { useDispatch } from 'react-redux';
import {
    changeStateTable,
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

    // const { active } = useSelector(state => state.diningRoom);

    const table = {
        CapacidadMesa: CapacidadMesa,
        IdEmpleado: IdEmpleado,
        IdEstadoMesa: EstadoMesa
    }

    const dataPedido = {
        numMesa: NumeroMesa,
        pedidoMesa: 'Default',
        total: 0,
        estado: 0
    }

    const handleClickEstadoHabilitada = () => {

        table.IdEstadoMesa = 1;
        dispatch(changeStateTable(NumeroMesa, table));
    }

    const handleClickEstadoOcupada = () => {

        table.IdEstadoMesa = 3;
        dispatch(changeStateTable(NumeroMesa, table, dataPedido));
    }

    const handleClickEstadoDeshabilitada = () => {

        table.IdEstadoMesa = 2;
        dispatch(changeStateTable(NumeroMesa, table));
    }

    const handleClickEstadoReservada = () => {

        table.IdEstadoMesa = 4;
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
                        className="boton-state-deactive"
                        type="submit"
                        onClick={handleClickEstadoHabilitada}
                    >
                        Habilitada
                    </button>
                    <button
                        className="boton-state-deactive"
                        type="submit"
                        onClick={handleClickEstadoOcupada}
                    >
                        Asignada
                    </button>
                    <button
                        className="boton-state-deactive"
                        type="submit"
                        onClick={handleClickEstadoDeshabilitada}
                    >
                        Deshabilitada
                    </button>
                    <button
                        className="boton-state-deactive"
                        type="submit"
                        onClick={handleClickEstadoReservada}
                    >
                        Reservada
                    </button>
                </div>


            </div>
        </div>

    )
}
