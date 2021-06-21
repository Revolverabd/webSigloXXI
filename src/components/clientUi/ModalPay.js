import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/clientUiAction';
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

export const ModalPay = () => {

    const dispatch = useDispatch();
    const { modalPay } = useSelector(state => state.clientUi)


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
            <form className="container">


                <hr />


                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-credit-card"></i>
                    <span> Pagar</span>
                </button>

            </form>
        </Modal>


    )
}
