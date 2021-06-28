import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import {
    uiCloseViewPedido,
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

export const ModalStatePedido = () => {

    const { modalViewPedido, pedido } = useSelector(state => state.clientUi)

    const dispatch = useDispatch();


    const closeModal = () => {
        dispatch(uiCloseViewPedido());
    }

    console.log(pedido)
    // const total = calculaTotalPedido(listProduct);

    // let newPedido = {
    //     numMesa: pedido[0].numMesa,
    //     pedidoMesa: pedido[0].pedidoMesa,
    //     total,
    //     estado: 1,
    //     estadoCocina: "CONFIRMADA"
    // }

    // const handleSendPedido = () => {
    //     let pedido = listProduct.map(function (product) {
    //         let lista = {
    //             name: product.name,
    //             counter: product.counter
    //         }
    //         return lista;
    //     });
    //     pedido = JSON.stringify(pedido);
    //     newPedido.pedidoMesa = pedido;
    //     dispatch(uiSendPedido(newPedido));
    // }

    return (
        <Modal
            isOpen={modalViewPedido}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            closeTimeoutMS={200}
            style={customStyles}
            className="modal scroll-modal"
            overlayClassName="modal-fondo"
            contentLabel="Example Modal"
        >
            <h1>Mis Pedidos</h1>
            <br />
            <div>
                <ul className=" ">
                    {
                        pedido.map((oneProduct) => (

                            <li
                                key={oneProduct.id}
                                className=""
                            >
                                {/* <p className="text-center m-cero"> {oneProduct.name}</p>
                                <p className="text-center m-cero"> ${oneProduct.precio}</p>
                                <p className="text-center m-cero">Sub Total {oneProduct.subTotal}</p>
                                <p className="text-center m-cero">Cantidad {oneProduct.counter}</p> */}

                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* <div className="container">

                <hr />

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                    onClick={handleSendPedido}
                >
                    <i className="fas fa-pepper-hot"></i>
                    <span> Solicitar comida</span>
                </button>

            </div> */}
        </Modal>
    )
}
