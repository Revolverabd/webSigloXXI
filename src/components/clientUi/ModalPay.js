import React from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';

import {
    useDispatch,
    useSelector
} from 'react-redux';

import {
    uiCloseModal,
    actionWebpay,
    tansactPagoDb
} from '../../actions/clientUiAction';

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

    let numero = Math.floor((Math.random() * (999 - 100 + 1)) + 1);

    // console.log(numero);

    const transact = {
        "buy_order": `O-${numero}`,
        "session_id": `S-${numero}`,
        "amount": totalBoleta,
        "return_url": "http://apirestaurant.duckdns.org:8081/api/webpay/info"
    }

    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    let email = localStorage.getItem('email');

    if (!email) {
        email = 'invitado@gmail.com';
    }

    const transactDb = {
        "fecha": hoy.toLocaleString(), // "14/6/2020 29-06-2021 22:53:24",
        "emailCliente": email,
        "idEmpleado": pedido[0].idEmpleado,
        "total": totalBoleta,
        "numMesa": pedido[0].numMesa
    }

    const handlePayWebPay = async (transact) => {

        if (totalBoleta === 0) {

            Swal.fire('Aviso', 'No hay cobros por hacer', 'info');
            dispatch(uiCloseModal());

        } else {

            const resultWebPay = await actionWebpay(transact);

            if (!resultWebPay) {

                Swal.fire('¡UPS!', 'Algo salió mal con el pago, llame al garzón para solucionarlo', 'error');

            } else {

                token = resultWebPay.token;
                url = resultWebPay.url;
                
                await localStorage.clear();

                await tansactPagoDb(transactDb);

                const divParent = document.getElementById('funcWebPay');
                divParent.innerHTML = `"<form className="container" id="formId" name="formWebPay" action=${url} method="POST">
                                            <input type="hidden" name="token_ws" value=${token} />
                                        </form>"`;
                document.formWebPay.submit();
            }

        }
    }

    const handlePayCash = async (e) => {

        if (totalBoleta === 0) {
            Swal.fire('Aviso', 'No hay cobros por hacer', 'info');
            dispatch(uiCloseModal());
        } else {
            e.preventDefault();
            await tansactPagoDb(transactDb);
            Swal.fire('Aviso', 'Aviso entregado, espere a que el garzón venga', 'info');
        }
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
            <h1 id="tituloPrecuenta">Pre Cuenta Mesa Nº {mesa}</h1>
            <br />
            <div>
                <div className="scroll-modal precuentaPedido">
                    {
                        platos.map((oneProduct, i) => (

                            <div
                                key={oneProduct.id}
                                className="pedidoOrden "
                            >
                                <div className="tituloLeft"><p id="tituloPedido" className="pedidoOrden m-cero "> Pedido Nº: {i + 1}</p></div>

                                <div className="row pascalCase ">
                                    {
                                        oneProduct.pedidoMesa.map((element) => (

                                            <p
                                                key={element.id}
                                                className="nombreContadorModelPay"
                                            >
                                                {element.name.toLowerCase()}&#58;&nbsp;{element.counter}&nbsp;
                                            </p>
                                        ))
                                    }
                                </div>
                                <div class="pedidoOrden tituloRight">Total de Pedido: ${oneProduct.total}</div>
                            </div>
                        ))
                    }
                    <p class="pedidoOrden tituloRight2">
                        Monto total a Pagar: ${totalBoleta}
                    </p>
                </div>
            </div>
            <div id="funcWebPay">

            </div>
            <div className="containerModelPayButton">
                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                    onClick={() => handlePayWebPay(transact)}
                >
                    <i className="far fa-credit-card"></i>
                    <span> Pagar WebPay</span>
                </button>

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
