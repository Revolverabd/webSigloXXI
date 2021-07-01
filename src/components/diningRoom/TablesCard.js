import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import {
    changeStateTable,
} from '../../actions/diningUiAction';

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

    const { role } = useSelector(state => state.auth);

    const table = {
        CapacidadMesa: CapacidadMesa,
        IdEmpleado: IdEmpleado,
        IdEstadoMesa: EstadoMesa,
    }

    const dataPedido = {
        numMesa: NumeroMesa,
        pedidoMesa: "NO ASIGNADO",
        total: 0,
        estado: 0,
        estadoCocina: "NO ASIGNADO"
    }

    const handleClickEstadoHabilitada = () => {

        if (EstadoMesa === 'HABILITADA') {

            if (role === 1 || role === 5) {
                table.IdEstadoMesa = 1;
                dispatch(changeStateTable(NumeroMesa, table));
            } else {
                Swal.fire('Denegada', 'No tiene permisos para ejecutar esta acción', 'error');
            }

        } else {
            Swal.fire('¡UPS!', `Mesa se encuentra asignada ${EstadoMesa}`, 'info');
        }
    }

    const handleClickEstadoOcupada = () => {

        if (EstadoMesa === 'HABILITADA') {

            if (role === 1 || role === 5) {
                table.IdEstadoMesa = 3;
                dispatch(changeStateTable(NumeroMesa, table, dataPedido));
            } else {
                Swal.fire('Denegada', 'No tiene permisos para ejecutar esta acción', 'error');
            }
        } else {
            Swal.fire('¡UPS!', `Mesa se encuentra asignada ${EstadoMesa}`, 'info');
        }
    }

    const handleClickEstadoDeshabilitada = () => {

        if (EstadoMesa === 'HABILITADA') {

            if (role === 1 || role === 5) {
                table.IdEstadoMesa = 2;
                dispatch(changeStateTable(NumeroMesa, table));
            } else {
                Swal.fire('Denegada', 'No tiene permisos para ejecutar esta acción', 'error');
            }
        } else {
            Swal.fire('¡UPS!', `Mesa se encuentra asignada ${EstadoMesa}`, 'info');
        }
    }

    const handleClickEstadoReservada = () => {

        if (EstadoMesa === 'HABILITADA') {

            if (role === 1 || role === 5) {
                table.IdEstadoMesa = 4;
                dispatch(changeStateTable(NumeroMesa, table));
            } else {
                Swal.fire('Denegada', 'No tiene permisos para ejecutar esta acción', 'error');
            }
        } else {
            Swal.fire('¡UPS!', `Mesa se encuentra asignada ${EstadoMesa}`, 'info');
        }
    }


    return (

        <div className="padingAll" >


        <div className="centered">
            <span id="tituloTableroMesa" >Mesa Nº {NumeroMesa}</span>
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

    )
}
