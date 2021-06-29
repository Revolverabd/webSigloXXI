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

    let platos = [];
    let mesa = "";

    let token = '';
    let url = '';

    pedido.forEach(product => {

        if (product.pedidoMesa !== 'NO ASIGNADO') {

            let pedidos = {}

            pedidos['pedidoMesa'] = JSON.parse(product.pedidoMesa);
            pedidos['total'] = product.total;

            platos.push(pedidos);
            mesa = product.numMesa;
        }

    });

    const totalBoleta = calculaTotalBoleta(pedido);


    const transact = {
        "buy_order": "ordenCompra12345678",
        "session_id": "sesion1234557545",
        "amount": totalBoleta,
        "return_url": "http://apirestaurant.duckdns.org:8081/api/webpay/info"
    }

    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

    // const transactDb = {
    //     "fecha": hoy.toLocaleDateString(), // "14/6/2020",
    //     "idCliente": 1,
    //     "idEmpleado": 
    // }

    const handlePayWebPay = async (transact) => {

        const resultWebPay = await actionWebpay(transact);
        token = resultWebPay.token;
        url = resultWebPay.url;



        const divParent = document.getElementById('funcWebPay');

        divParent.innerHTML = `"<form className="container" id="formId" name="formWebPay" action=${url} method="POST">
                                    <input type="hidden" name="token_ws" value=${token} />
                                </form>"`;
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
            className="modal "
            overlayClassName="modal-fondo"
            contentLabel="Example Modal"
        >
            <h1>Pre Cuenta Mesa Nº {mesa}</h1>
            <br />
            <div>
                <div className="scroll-modal ">
                    {
                        platos.map((oneProduct, i) => (

                            <div
                                key={oneProduct.id}
                                className=""
                            >
                                <p className="text-center m-cero"> Pedido Nº: {i + 1}</p>
                                <div className=" ">
                                    {
                                        oneProduct.pedidoMesa.map((element, i) => (

                                            <div
                                                key={element.id}
                                                className=""
                                            >
                                                <p className="text-center m-cero"> {element.name.toLowerCase()}</p>


                                            </div>
                                        ))
                                    }
                                </div>
                                <div class="text-right">Total de Pedido: ${oneProduct.total}</div>
                            </div>
                        ))
                    }
                    <div class="text-right">
                        Monto total a Pagar: ${totalBoleta}
                    </div>
                </div>
            </div>
            <div id="funcWebPay">

            </div>
            <div className="container">
                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                    onClick={() => handlePayWebPay(transact)}
                >
                    <i className="far fa-credit-card"></i>
                    <span> Pagar WebPay</span>
                </button>
            </div>
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
