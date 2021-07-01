import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { diningStartLoading } from '../../actions/diningUiAction';
import { NavBarDashboar } from '../ui/NavBarDashboar'

import { TablesCard } from './TablesCard';


export const DiningRoomScreen = () => {

    const dispatch = useDispatch();

    const { tables } = useSelector(state => state.diningRoom);

    const orderTables = tables.sort((a, b) => (a.NumeroMesa - b.NumeroMesa));

    useEffect(() => {

        dispatch(diningStartLoading());

    }, [dispatch])

    return (
        <div className="cuerpo2 ">
            <NavBarDashboar />
            <div className="centered">
                <span id="tituloTablero2">Dining Room</span>
            </div>
            <div className="">


                <ul className="row m-cero ">
                    {
                        orderTables.map((table) => (
                            <li id="deleteStyle"
                                key={table.Id}
                            >
                                <TablesCard
                                    key={table.Id}
                                    {...table}
                                />
                                <div className="centered">
                                    <span id="tituloTableroMesaRoom" className="  m-cero"> {table.EstadoMesa}</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>

    )
}

