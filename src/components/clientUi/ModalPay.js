import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/clientUiAction';

import { fetchNotTokenWebpay } from '../../helpers/fetch';
import './clientUiStyle.css';
// const WebpayPlus = require('transbank-sdk').WebpayPlus; // ES5
// import { WebpayPlus } from 'transbank-sdk'; // ES6

// Es necesario ejecutar dentro de una función async para utilizar await


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

export const ModalPay = () => {

    const dispatch = useDispatch();
    const { modalPay } = useSelector(state => state.clientUi)


    const closeModal = () => {
        dispatch(uiCloseModal());
    }

    const handlePayCash = async (e) => {
        e.preventDefault();

        const transact = {
            "buy_order": "ordenCompra12345678",
            "session_id": "sesion1234557545",
            "amount": 10000,
            "return_url": "http://www.comercio.cl/webpay/retorno"
        }

        const resp = await fetchNotTokenWebpay(`webpay/create`, transact, 'POST');
        const body = await resp.json();
        console.log(body)

    }

    return (
        <Modal
            isOpen={modalPay}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            closeTimeoutMS={200}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            contentLabel="Example Modal"
        >
            <h1>Pre Cuenta</h1>
            <br />

            <form className="container" action="https://webpay3gint.transbank.cl/webpayserver/initTransaction" method="POST">

                <input type="hidden" name="token_ws" value="01abccccd6e4887f1b70e0a4d7e577a25c8237f2ccae900e5c40d3592079c466" />
               
                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-credit-card"></i>
                    <span> Pagar WebPay</span>
                </button>

                <hr />

            </form>

            <div className="container">
                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                    onClick={handlePayCash}
                >
                    <i className="far fa-credit-card"></i>
                    <span> Pagar Efectivo</span>
                </button>
            </div>

        </Modal>


    )
}
