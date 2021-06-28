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
        <div>
            <NavBarDashboar />
            <h1>Dining Room</h1>

            <ul className="row text-center ">
                {
                    orderTables.map((table) => (
                        <li id="deleteStyle" 
                            key={table.Id}
                        >
                            <TablesCard
                                key={table.Id}
                                {...table}
                            />
                            <p className="text-center m-cero"> {table.EstadoMesa}</p>
                        </li>
                    ))
                }
            </ul>
        </div>

    )
}

