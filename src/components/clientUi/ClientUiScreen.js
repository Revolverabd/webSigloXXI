import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavBarClient } from '../ui/NavBarClient';

import { ProductCard } from './ProductCard';
import { Counter } from './Counter';
import { ModalPay } from './ModalPay';
import { ModalPedido } from './ModalPedido';
import { ModalStatePedido } from './ModalStatePedido';

import {
    clientPedidoLoading,
    clientStartLoading,
    uiOpenModal,
    uiOpenModalPedido,
    uiOpenViewPedido,
    establecerPedido,
    clientPedidosLoadingState
} from '../../actions/clientUiAction';


/**
 * ESTILOS 
 **/
import "../../styles/main.css";


export const ClientUiScreen = () => {

    const dispatch = useDispatch();

    const { products, listProduct, pedido } = useSelector(state => state.clientUi);

    //establece la mesa asignada al terminal
    if (pedido[0].estado === 0) {
        dispatch(establecerPedido(pedido[0].numMesa));
    }

    let btnState = false;
    if (listProduct.length === 0) {
        btnState = true;
    }

    //cambiar posteriormente
    let btnPayState = false;
    if (pedido.length === 0) {
        btnState = true;
    }

    let data1 = products.filter(data => data.Categoria === "PLATOS DE LA CASA");
    let data2 = products.filter(data => data.Categoria === "BEBESTIBLES");
    let data3 = products.filter(data => data.Categoria === "CARNES");
    let data4 = products.filter(data => data.Categoria === "PASTAS");
    let data5 = products.filter(data => data.Categoria === "POSTRES");

    const handleOpenModal = (numMesa) => {

        if (numMesa !== 0) {
            dispatch(clientPedidosLoadingState(numMesa));
        }
        dispatch(uiOpenModal());
    }

    const handlePedidoModal = () => {
        dispatch(uiOpenModalPedido());
    }

    const handleOpenViewModal = (numMesa) => {
        if (numMesa !== 0) {
            dispatch(clientPedidosLoadingState(numMesa));
        }
        dispatch(uiOpenViewPedido());
    }

    useEffect(() => {

        // mantiene el estado del pedido mientras no se encuentra una mesa asignada a este terminal
        if (pedido[0].estado === 10) {
            dispatch(clientPedidoLoading());
        }

        dispatch(clientStartLoading());

    }, [dispatch]);

    return (
<div className=" divimagecabecera addScroll ">
            <div className="box"> </div>
            <NavBarClient />

            <div className="row">

                <div className="col-8  paddingtop " >
                    <div className="barraTopClientUiScreen">
                        <div className="floatLeft">
                            <h1> Mesa N??: {pedido[0].numMesa}</h1>
                            <h1> Atendido por Garz??n: {pedido[0].nombreEmpleado}</h1>
                        </div>
                        <div className="floatRight">
                            <div>
                                <button
                                    disabled={btnPayState}
                                    className="btn-top-client-pagar btn btn-danger"
                                    type="submit"
                                    onClick={() => handleOpenModal(pedido[0].numMesa)}
                                >
                                    <i className="fas fa-money-bill-alt">&nbsp;</i>
                                    Pagar
                                </button>
                            </div>
                            <ModalPay />
                            <div>
                                <button
                                    disabled={btnPayState}
                                    className="btn-top-client-pedidos btn btn-danger"
                                    type="submit"
                                    onClick={() => handleOpenViewModal(pedido[0].numMesa)}
                                >
                                    <i className="fas fa-shopping-basket">&nbsp;</i>
                                    Mis Pedidos
                                </button>
                            </div>
                        </div>
                        <ModalStatePedido />
                    </div>
                    <div className="margenTopClientUi">
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
                            <div className="row">
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
                        <div className="row">
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
                        <div className="row">
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
                        <div className="row">
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
                </div>
                <div className="" >

                    <div className="prueba position-fixed divcard overflow-auto ">
                        <h1 id="titulo3">Lista de productos</h1>

                        <Counter />


                        <button
                            disabled={btnState}
                            className="btn btn-info"
                            type="submit"
                            onClick={handlePedidoModal}

                        >
                            Realizar pedido
                        </button>


                        <ModalPedido />

                    </div>
                </div>

            </div>
        </div>

        // <div className=" divimagecabecera addScroll ">
        //     <div className="box"> </div>
        //     <NavBarClient />

        //     <div className="row"  >

        //         <div className="col-8 col-sm-8 col-md-8 paddingtop " >
        //             <div className="barraTopClientUiScreen">
        //                 <div className="floatLeft">
        //                     <h1> Mesa N??: {pedido[0].numMesa}</h1>
        //                     <h1> Atendido por Garz??n: {pedido[0].nombreEmpleado}</h1>
        //                 </div>
        //                 <div className="floatRight">
        //                     <div>
        //                         <button
        //                             disabled={btnPayState}
        //                             className="btn-top-client-pagar btn btn-danger"
        //                             type="submit"
        //                             onClick={() => handleOpenModal(pedido[0].numMesa)}
        //                         >
        //                             <i className="fas fa-money-bill-alt">&nbsp;</i>
        //                             Pagar
        //                         </button>
        //                     </div>
        //                     <ModalPay />
        //                     <div>
        //                         <button
        //                             disabled={btnPayState}
        //                             className="btn-top-client-pedidos btn btn-danger"
        //                             type="submit"
        //                             onClick={() => handleOpenViewModal(pedido[0].numMesa)}
        //                         >
        //                             <i className="fas fa-shopping-basket">&nbsp;</i>
        //                             Mis Pedidos
        //                         </button>
        //                     </div>
        //                 </div>
        //                 <ModalStatePedido />
        //             </div>
        //             <div className="margenTopClientUi">
        //                 <h1 id="titulo">PLATOS DE LA CASA</h1>

        //                 <div className="row ">

        //                     {
        //                         data1.map(product => (
        //                             <ProductCard
        //                                 key={product.Id}
        //                                 {...product}
        //                             />
        //                         ))
        //                     }
        //                 </div>

        //                 <div>
        //                     <h1 id="titulo">Bebestibles</h1>
        //                     <div className="card-columns">
        //                         {
        //                             data2.map(product => (
        //                                 <ProductCard
        //                                     key={product.Id}
        //                                     {...product}
        //                                 />
        //                             ))
        //                         }
        //                     </div>
        //                 </div>

        //                 <h1 id="titulo">Carnes</h1>
        //                 <div className="card-columns">
        //                     {
        //                         data3.map(product => (
        //                             <ProductCard
        //                                 key={product.Id}
        //                                 {...product}
        //                             />
        //                         ))
        //                     }
        //                 </div>
        //                 <h1 id="titulo">Pastas</h1>
        //                 <div className="card-columns">
        //                     {
        //                         data4.map(product => (
        //                             <ProductCard
        //                                 key={product.Id}
        //                                 {...product}
        //                             />
        //                         ))
        //                     }
        //                 </div>
        //                 <h1 id="titulo">Postres</h1>
        //                 <div className="card-columns">
        //                     {
        //                         data5.map(product => (
        //                             <ProductCard
        //                                 key={product.Id}
        //                                 {...product}
        //                             />
        //                         ))
        //                     }
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="col-4 col-sm-4 col-md-4 prueba paddingtop" >

        //             <div className="position-fixed divcard overflow-auto ">
        //                 <h1 id="titulo2">Lista de productos</h1>

        //                 <Counter />

        //                 <button
        //                     disabled={btnState}
        //                     className="btn btn-info"
        //                     type="submit"
        //                     onClick={handlePedidoModal}

        //                 >
        //                     Realizar pedido
        //                 </button>

        //                 <ModalPedido />

        //             </div>
        //         </div>
        //     </div>
        // </div>



    )
}
