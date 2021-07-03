import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import {
    uiCloseModalPedido,
    uiSendPedido
} from '../../actions/clientUiAction';

import { 
    calculaTotalPedido
 } from '../../helpers/caculaTotal';

// import Swal from 'sweetalert2';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const ModalPedido = () => {

    const { modalPedido, listProduct, pedido } = useSelector(state => state.clientUi);
    const dispatch = useDispatch();

    const total = calculaTotalPedido(listProduct);

    let newPedido = {
        numMesa: pedido[0].numMesa,
        pedidoMesa: pedido[0].pedidoMesa,
        total,
        estado: 1,
        estadoCocina: "CONFIRMADA"
    }

    const handleSendPedido = () => {
        let pedido = listProduct.map(function (product) {
            let lista = {
                name: product.name,
                counter: product.counter
            }
            return lista;
        });
        pedido = JSON.stringify(pedido);
        newPedido.pedidoMesa = pedido;
        dispatch(uiSendPedido(newPedido));
    }

    const closeModal = () => {
        dispatch(uiCloseModalPedido());
    }

    return (

<Modal
            isOpen={modalPedido}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            closeTimeoutMS={200}
            style={customStyles}
            className="modal scroll-modal"
            overlayClassName="modal-fondo"
            contentLabel="Example Modal"
        >
            <h1>Pedido</h1>
            <br />
            <div className="">
                <div className="scroll-modal precuentaPedido ">
                    {
                        listProduct.map((oneProduct) => (

                            <div
                                key={oneProduct.id}
                                className="pedidoOrden"
                            >
                                <div className="">
                                    <p id="tituloPedido" className="pedidoOrden m-cero ">{oneProduct.name}</p>
                                </div>
                                <div className="row ">
                                    <p className="nombreContadorModelPay"> ${oneProduct.precio}</p>

                                    <p className="nombreContadorModelPay">Cantidad {oneProduct.counter}</p>
                                    <p className="nombreContadorModelPay">Sub Total: ${oneProduct.subTotal}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className="container">

                <hr />

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                    onClick={handleSendPedido}
                >
                    <i className="fas fa-pepper-hot"></i>
                    <span> Solicitar comida</span>
                </button>

            </div>
        </Modal>
    )
}
