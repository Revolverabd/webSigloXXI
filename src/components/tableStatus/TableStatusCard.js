import { useDispatch } from 'react-redux';
import React from "react";
import { changeStateTableOrders } from '../../actions/TableStatusUiAction';

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
        <div className="contenedorTablero">

            <div className="cartaTablero" >
                <div className="cuerpoTablero">

                    <h3 id="bordeMesaTablero">
                        Nº Mesa : {numMesa}
                    </h3>
                    <h3 id="bordePedidoTablero">
                        Pedido :
                        {pedidoMesaParse.map(
                            name =>
                                <h3 className="text-pedidoTablero">
                                    # {name.name.toLowerCase()} = {name.counter}
                                </h3>
                        )}

                    </h3>
                    <h3 id="bordetotalTablero">
                        Total : $ {total}
                    </h3>
                </div>
                <div className="footerTablero" >
                    <h3 id="bordeCocinaTablero">
                        {estadoCocina}
                    </h3>

                </div>
                <button id="button-Tablero"  onClick={() => handleClick(id)}>
                    Despachar
                </button>
            </div>

        </div>
    </div>
    )
}
