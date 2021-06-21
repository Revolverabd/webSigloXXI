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
    const { modal } = useSelector(state => state.clientUi)


    const closeModal = () => {
        dispatch(uiCloseModal());
    }

    return (
        <Modal
            isOpen={modal}
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

                {/* <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <input className="form-control" placeholder="Fecha inicio" />
                </div> */}

                {/* <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <input className="form-control" placeholder="Fecha inicio" />
                </div> */}

                <hr />
                {/* <div className="form-group">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div> */}

                {/* <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div> */}

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
