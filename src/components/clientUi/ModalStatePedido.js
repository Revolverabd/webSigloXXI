import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import {
    uiCloseViewPedido
} from '../../actions/clientUiAction';
import { calculaTotalBoleta } from '../../helpers/caculaTotal';

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

    let platos = [];

    const totalBoleta = calculaTotalBoleta(pedido);
    
    pedido.forEach(product => {

        if (product.pedidoMesa !== 'NO ASIGNADO') {

            let pedidos = {}

            pedidos['pedidoMesa'] = JSON.parse(product.pedidoMesa);
            pedidos['total'] = product.total;
            pedidos['estadoCocina'] = product.estadoCocina;

            platos.push(pedidos);

        }

    });

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
            <div className="scroll-modal precuentaPedido">
                    {
                        platos.map((oneProduct, i) => (

                            <div
                                key={oneProduct.id}
                                className="pedidoOrden "
                            >
                                <div className="tituloLeft"><p id="tituloPedido" className="pedidoOrden m-cero "> Pedido NÂº: {i + 1}</p></div>
                                
                                <div className="row pascalCase ">
                                    {
                                        oneProduct.pedidoMesa.map((element, ii) => (

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

        </Modal>
    )
}
