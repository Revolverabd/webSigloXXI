import React from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';


import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal, actionWebpay, createPago } from '../../actions/clientUiAction';


import { calculaTotalBoleta } from '../../helpers/caculaTotal';

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
    const { modalPay, pedido } = useSelector(state => state.clientUi);

    const totalBoleta = calculaTotalBoleta(pedido);

    const transact = {
        "buy_order": "ordenCompra12345678",
        "session_id": "sesion1234557545",
        "amount": totalBoleta,
        "return_url": "http://www.comercio.cl/webpay/retorno"
    }

    // dispatch(createPago(transact));





    // console.log(transact);

    let token = '';
    let url = '';


    // (transact) => {

    //     const resultWebPay = await actionWebpay(transact);

    //     token = resultWebPay.token;
    //     url = resultWebPay.url;

    // }

    // const handlePayWebPay = async (transact) => {
    //     // e.preventDefault();

    //     const resultWebPay = await actionWebpay(transact);

    //     token = resultWebPay.token;
    //     url = resultWebPay.url;

    //     console.log(token);

    //     document.formWebPay.submit();

    // }

    const handlePayWebPay = async (transact) => {
        // e.preventDefault();

        const resultWebPay = await actionWebpay(transact);

        token = resultWebPay.token;
        url = resultWebPay.url;

        document.body.innerHTML +=
            `<form className="container" id="formId" name="formWebPay" action="https://webpay3gint.transbank.cl/webpayserver/initTransaction" method="POST">
                <input type="hidden" name="token_ws" value={token} />
            </form>`;

        $("#funcWebPay").appendTo("#formId");

        document.formWebPay.submit();

    }


    const handlePayCash = (e) => {
        e.preventDefault();
        Swal.fire('Aviso', 'Aviso entregado, espere a que el garzón venga', 'info');
    }

    const closeModal = () => {
        dispatch(uiCloseModal());
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

            <div id="funcWebPay">

            </div>
            {/* <form className="container" name="formWebPay" action="https://webpay3gint.transbank.cl/webpayserver/initTransaction" method="POST">

                <input type="hidden" name="token_ws" value={token} />

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                    onClick={() => handlePayWebPay(transact)}
                >
                    <i className="far fa-credit-card"></i>
                    <span> Pagar WebPay</span>
                </button>

                <hr />

            </form> */}

            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
                onClick={() => handlePayWebPay(transact)}
            >
                <i className="far fa-credit-card"></i>
                <span> Pagar WebPay</span>
            </button>

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
