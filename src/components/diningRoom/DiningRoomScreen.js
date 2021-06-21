import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { diningStartLoading } from '../../actions/diningUiAction';
import { NavBar } from '../ui/NavBar';
import { NavBarDashboar } from '../ui/NavBarDashboar'

import { TablesCard } from './TablesCard';


export const DiningRoomScreen = () => {

    const dispatch = useDispatch();

    const { tables } = useSelector(state => state.diningRoom);

    const orderTables = tables.sort((a, b) => (a.NumeroMesa - b.NumeroMesa));
    //inicio
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
                            key={table.id}
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

        // <div >
        //     <NavBarDashboar />
        //     <h1>Dining Room</h1>
        //     <div className="card-columns">

        //         {
        //             tables.map(table => (
        //                 <TablesCard
        //                     key={table.Id}
        //                     {...table}
        //                 />

        //             ))

        //         }
        //         <span>Estado {tables.EstadoMesa}</span>
        //     </div>
        // </div>
    )
}

