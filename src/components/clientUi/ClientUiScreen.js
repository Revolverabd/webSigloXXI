import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clientStartLoading, deletePrecheckout } from '../../actions/clientUiAction';
import { NavBar } from '../ui/NavBar';

import { ProductCard } from './ProductCard';
import { Counter } from './Counter';

import "./clientUiStyle.css"

export const ClientUiScreen = () => {

    const dispatch = useDispatch();

    const { products, listProduct } = useSelector(state => state.clientUi);

    let data1 = products.filter(data => data.Categoria === "PLATOS DE LA CASA");
    let data2 = products.filter(data => data.Categoria === "BEBESTIBLES");
    let data3 = products.filter(data => data.Categoria === "CARNES");
    let data4 = products.filter(data => data.Categoria === "PASTAS");
    let data5 = products.filter(data => data.Categoria === "POSTRES");

    useEffect(() => {

        localStorage.setItem('listProduct', JSON.stringify(listProduct));
        dispatch(clientStartLoading());

    }, [dispatch, listProduct])

    const handleClickDelete = (productId) => {
        // e.preventDefault();
        dispatch(deletePrecheckout(productId));
        // console.log(productId)
    }

    return (

        <div class="content">
            <NavBar />
            <div class="row pepito"  >
                <div class="col-md-8" >
                    <h1 id="titulo">PLATOS DE LA CASA</h1>
                    <div class="card-columns">

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
                    <div>
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
                            <div>
                            </div>
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
                            <div>
                            </div>
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
                </div>
                <div class="col-md-4 prueba" >

                    <div>Lista de productos ({listProduct.length})

                        <ul className="list-group list-group-flush">
                            {
                                listProduct.map((oneProduct, i) => (
                                    <li
                                        key={oneProduct.id}
                                        className="list-group-item"
                                    >
                                        <p className="text-center m-cero"> {oneProduct.name}</p>
                                        <p className="text-center m-cero"> Valor unitario ${oneProduct.precio}</p>

                                        <Counter 
                                        precio={oneProduct.precio}
                                        
                                        />
                                        <button
                                            className="btn btn-danger"
                                            type="submit"
                                            onClick={() => handleClickDelete(oneProduct.id)}
                                        >
                                            Quitar
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                        <button
                            className="btn btn-danger"
                            type="submit"
                        // onClick={() => handleClickDelete(oneProduct.id)}
                        >
                            Pagar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
