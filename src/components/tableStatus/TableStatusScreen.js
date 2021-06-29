import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavBarDashboar } from '../ui/NavBarDashboar'

import { TableStatusStartLoading } from '../../actions/TableStatusUiAction';

import { TablesStatusCard } from './TableStatusCard';


// import "./TableStatusUiStyle.css";

export const TableStatusScreen = () => {

    const dispatch = useDispatch();

    const { orders } = useSelector(state => state.tableStatus);

    let data1 = orders.filter(data => data.estadoCocina === "CONFIRMADA");

    console.log(data1);

    useEffect(() => {

        dispatch(TableStatusStartLoading());

    }, [dispatch])

    return (

        <div className="cuerpo2">
            <NavBarDashboar />
            <div className="container"> 

                <h1 id = "tituloTablero">Tablero de estado de Pedidos</h1>

                <ul className="row">
                    {
                        data1.map((orderss) => (

                            <TablesStatusCard
                                key={orderss.numMesa}
                                {...orderss}
                            />


                        ))
                    }
                </ul>
            </div>
        </div>




    )
}
