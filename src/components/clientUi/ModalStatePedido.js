import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import {
    uiCloseViewPedido
} from '../../actions/clientUiAction';

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

    // console.log(pedido);

    let platos = [];

    // const productsDecreased = pedido.map(function (product) {

    //     if (product.pedidoMesa !== 'NO ASIGNADO') {
    //         platos = JSON.parse(product.pedidoMesa);
    //     }

    //     return platos;

    // });

    pedido.forEach(product => {
        if (product.pedidoMesa !== 'NO ASIGNADO') {
            platos = JSON.parse(product.pedidoMesa);
        }
    });

    // console.log(platos);

    const closeModal = () => {
        dispatch(uiCloseViewPedido());
    }


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
                        platos.map((oneProduct) => (

                            <li
                                key={oneProduct.id}
                                className=""
                            >
                                <p className="text-center m-cero"> {oneProduct.name}</p>

                            </li>
                        ))
                    }
                </ul>
            </div>

        </Modal>
    )
}
