import { useDispatch } from 'react-redux';
import {
    diningStartLoading,
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

    const table = {
        CapacidadMesa: CapacidadMesa,
        IdEmpleado: IdEmpleado,
        IdEstadoMesa: EstadoMesa
    }

    const handleClickEstadoOcupada = () => {
        table.IdEstadoMesa = 3;
        console.log(table);
        dispatch(changeStateTable(NumeroMesa, table));
    }
    const handleClickEstadoHabilitada = () => {
        table.IdEstadoMesa = 1;
        console.log(table);
        dispatch(changeStateTable(NumeroMesa, table));
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
                        <div className="imgTablesCard  ">

                        <span id="numeroMesa" >Mesa Nº {NumeroMesa}</span>
                        </div>

                    </div>
                    <div >
                        <button
                            className="btn btn-primary"
                            type="submit"
                            onClick={handleClickEstadoOcupada}
                        >
                            Ocupada
                        </button>
                        <button
                            className="btn btn-primary"
                            type="submit"
                            onClick={handleClickEstadoHabilitada}
                        >
                            Habilitada
                        </button>
                        <button
                            className="btn btn-primary"
                            type="submit"
                            onClick={handleClickEstadoDeshabilitada}
                        >
                            Deshabilitada
                        </button>
                        <button
                            className="btn btn-primary"
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
