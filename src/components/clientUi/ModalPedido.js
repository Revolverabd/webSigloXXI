import React from 'react';
import Modal from 'react-modal';

import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModalPedido } from '../../actions/clientUiAction';
import { uiSendPedido } from '../../actions/clientUiAction';

// import Swal from 'sweetalert2';

import './clientUiStyle.css';

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

    const dispatch = useDispatch();

    const { modalPedido, listProduct, pedido } = useSelector(state => state.clientUi)



    // let modal = modalPedido;

    // // console.log(listProduct.length)
    // // console.log(modal)

    // if (listProduct.length === 0) {
    //     modal = false;
    //     Swal.fire('Ups!', 'La lista de pedido se encuentra vacía', 'info');
    // }


    const closeModal = () => {
        dispatch(uiCloseModalPedido());
    }
    
    const handleSendPedido = () => {


        // dispatch(uiSendPedido());
    }

    return (
        <Modal
            isOpen={modalPedido}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            closeTimeoutMS={200}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            contentLabel="Example Modal"
        >
            <h1>Pedido</h1>
            <br />

            <ul className=" ">
                {
                    listProduct.map((oneProduct) => (

                        <li
                            key={oneProduct.id}
                            className=""
                        >
                            <p className="text-center m-cero"> {oneProduct.name}</p>
                            <p className="text-center m-cero"> ${oneProduct.precio}</p>
                            <p className="text-center m-cero">Sub Total {oneProduct.subTotal}</p>
                            <p className="text-center m-cero">Cantidad {oneProduct.counter}</p>

                        </li>
                    ))
                }
            </ul>




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
