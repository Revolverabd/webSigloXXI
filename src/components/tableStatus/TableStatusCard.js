import { useDispatch } from 'react-redux';
import React from "react";
import { changeStateTableOrders } from '../../actions/TableStatusUiAction';

// import "./TableStatusUiStyle.css"

export const TablesStatusCard = ({
    id,
    numMesa,
    pedidoMesa,
    total,
    estado,
    estadoCocina
}) => {

    const dispatch = useDispatch();

    const pedidoMesaParse = JSON.parse(pedidoMesa);

    const handleClick = (id) => {


        dispatch(changeStateTableOrders(id));
    }

    return (
        <div>
            <div className="contenedor">

                <div className="carta" >
                    <div className="cuerpo">

                        <h3 id="bordeMesa">
                            Nº Mesa : {numMesa}
                        </h3>
                        <h3 id="bordePedido">
                            Pedido :
                            {pedidoMesaParse.map(
                                name =>
                                    <h3 className="text-pedido">
                                        # {name.name.toLowerCase()} = {name.counter}
                                    </h3>
                            )}

                        </h3>
                        <h3 id="bordetotal">
                            Total : $ {total}
                        </h3>
                    </div>
                    <div className="footer" >
                        <h3 id="bordeCocina">
                            {estadoCocina}
                        </h3>

                    </div>
                    <button classname="button" onClick={() => handleClick(id)}>
                        Despachar
                    </button>
                </div>

            </div>
        </div>
    )
}
