import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clientStartLoading } from '../../actions/clientUiAction';
import { NavBar } from '../ui/NavBar';

import { ProductCard } from './ProductCard';
import { Counter } from './Counter';
import { ModalPay } from './ModalPay';
import { ModalPedido } from './ModalPedido';

import { uiOpenModal } from '../../actions/clientUiAction';
import { uiOpenModalPedido } from '../../actions/clientUiAction';

import "./clientUiStyle.css"

export const ClientUiScreen = () => {

    const dispatch = useDispatch();

    const { products, listProduct } = useSelector(state => state.clientUi);

    let btnState = false;

    if (listProduct.length === 0) {
        btnState = true;
    }

    let data1 = products.filter(data => data.Categoria === "PLATOS DE LA CASA");
    let data2 = products.filter(data => data.Categoria === "BEBESTIBLES");
    let data3 = products.filter(data => data.Categoria === "CARNES");
    let data4 = products.filter(data => data.Categoria === "PASTAS");
    let data5 = products.filter(data => data.Categoria === "POSTRES");

    const handleOpenModal = () => {
        dispatch(uiOpenModal());
    }

    const handlePedidoModal = () => {
        dispatch(uiOpenModalPedido());
    }

    useEffect(() => {

        dispatch(clientStartLoading());

    }, [dispatch])

    return (

        <div className=" divimagecabecera addScroll ">
            <div className="box"> </div>
            <NavBar />

            <div className="row"  >
                <div className="col-8 col-sm-8 col-md-8 paddingtop " >
                    <h1 id="titulo">PLATOS DE LA CASA</h1>

                    <div className="row ">

                        {
                            data1.map(product => (
                                <ProductCard
                                    key={product.Id}
                                    {...product}
                                />
                            ))
                        }
                    </div>

                    <div>
                        <h1 id="titulo">Bebestibles</h1>
                        <div className="card-columns">
                            {
                                data2.map(product => (
                                    <ProductCard
                                        key={product.Id}
                                        {...product}
                                    />
                                ))
                            }
                        </div>
                    </div>

                    <h1 id="titulo">Carnes</h1>
                    <div className="card-columns">
                        {
                            data3.map(product => (
                                <ProductCard
                                    key={product.Id}
                                    {...product}
                                />
                            ))
                        }
                    </div>
                    <h1 id="titulo">Pastas</h1>
                    <div className="card-columns">
                        {
                            data4.map(product => (
                                <ProductCard
                                    key={product.Id}
                                    {...product}
                                />
                            ))
                        }
                    </div>
                    <h1 id="titulo">Postres</h1>
                    <div className="card-columns">
                        {
                            data5.map(product => (
                                <ProductCard
                                    key={product.Id}
                                    {...product}
                                />
                            ))
                        }
                    </div>

                </div>

                <div className="col-4 col-sm-4 col-md-4 prueba paddingtop" >

                    <div className="position-fixed divcard overflow-auto ">
                        <h1 id="titulo2">Lista de productos</h1>

                        <Counter />

                        <button
                            disabled={btnState}
                            className="btn btn-danger"
                            type="submit"
                            onClick={handleOpenModal}
                        >
                            Pagar
                        </button>
                        <button
                            disabled={btnState}
                            className="btn btn-info"
                            type="submit"
                            onClick={handlePedidoModal}

                        >
                            Realizar pedido
                        </button>

                        <ModalPay />

                        <ModalPedido />

                    </div>
                </div>
            </div>
        </div>



    )
}
