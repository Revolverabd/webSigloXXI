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

    pedido.forEach(product => {

        if (product.pedidoMesa !== 'NO ASIGNADO') {

            let pedidos = {}

            pedidos['pedidoMesa'] = JSON.parse(product.pedidoMesa);
            pedidos['total'] = product.total;
            pedidos['estadoCocina'] = product.estadoCocina;

            platos.push(pedidos);

        }

    });

    console.log(platos);

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
                        platos.map((oneProduct, i) => (

                            <li
                                key={oneProduct.id}
                                className=""
                            >
                                <p className="text-center m-cero"> pedido {i + 1} total {oneProduct.total} {oneProduct.estadoCocina}</p>
                                <ul className=" ">
                                    {
                                        oneProduct.pedidoMesa.map((element, i) => (

                                            <li
                                                key={element.id}
                                                className=""
                                            >
                                                <p className="text-center m-cero"> {element.name}</p>


                                            </li>
                                        ))
                                    }
                                </ul>

                            </li>
                        ))
                    }
                </ul>
            </div>

        </Modal>
    )
}
