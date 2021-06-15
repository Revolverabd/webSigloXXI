import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clientStartLoading } from '../../actions/clientUiAction';
import { NavBar } from '../ui/NavBar';

import { ProductCard } from './ProductCard';

export const ClientUiScreen = () => {

    const dispatch = useDispatch();

    const { products } = useSelector(state => state.clientUi);


    let data1 = products.filter(data => data.Categoria === "PLATOS DE LA CASA");
    let data2 = products.filter(data => data.Categoria === "BEBESTIBLES");
    let data3 = products.filter(data => data.Categoria === "CARNES");
    let data4 = products.filter(data => data.Categoria === "PASTAS");
    let data5 = products.filter(data => data.Categoria === "POSTRES");


    useEffect(() => {

        dispatch(clientStartLoading());

    }, [dispatch])

    return (


        <div>

            <NavBar />

            <div>
                <h1>De la casa</h1>
                <div className="card-columns">
                    {
                        data1.map(product => (
                            <ProductCard
                                key={product.Id}
                                {...product}
                            />
                        ))
                    }
                </div>
            </div>
            <div>
                <h1>Bebestibles</h1>
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
                <h1>Carnes</h1>
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
                <h1>Pastas</h1>
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
                <h1>Postres</h1>
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
    )
}
