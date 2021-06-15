import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clientStartLoading } from '../../actions/clientUiAction';
import { getProductByCategory } from '../../selectors/getProductByCategory';
import { NavBar } from '../ui/NavBar';
import { ProductList } from './ProductList';

import Nav from 'react-bootstrap/Nav'

export const ClientUiScreen = () => {

    const dispatch = useDispatch();

    const { products } = useSelector(state => state.clientUi);

    console.log(products);

    // const handleClick = (products, category) => {

    let data1 = products.filter(data => data.Categoria === "PLATOS DE LA CASA");
    let data2 = products.filter(data => data.Categoria === "BEBESTIBLES");
    let data3 = products.filter(data => data.Categoria === "CARNES");
    let data4 = products.filter(data => data.Categoria === "PASTAS");
    let data5 = products.filter(data => data.Categoria === "POSTRES");

    // const productsList1 = getProductByCategory('CARNES', data1);
    // const productsList2 = getProductByCategory('BEBESTIBLES', data2);
    // const productsList3 = getProductByCategory('BEBESTIBLES', data3);
    // const productsList4 = getProductByCategory('BEBESTIBLES', data4);
    // const productsList5 = getProductByCategory('BEBESTIBLES', data5);

    // }



    useEffect(() => {

        dispatch(clientStartLoading());

    }, [dispatch])

    return (


             <div>

            <NavBar />
            <div>
                <h1>De la casa</h1>
                <ul>
                    {
                        data1.map(product => (
                            <li key={product.Id}>
                                {product.Nombre}
                            </li>

                        ))
                    }
                </ul>
            </div>
            <div>
                <h1>Bebestibles</h1>
                <ul>
                    {
                        data2.map(product => (
                            <li key={product.Id}>
                                {product.Nombre}
                            </li>

                        ))
                    }
                </ul>
            </div>
            <div>
                <h1>Carnes</h1>
                <ul>
                    {
                        data3.map(product => (
                            <li key={product.Id}>
                                {product.Nombre}
                            </li>

                        ))
                    }
                    <div>
                    </div>
                </ul>
                <h1>Pastas</h1>
                <ul>
                    {
                        data4.map(product => (
                            <li key={product.Id}>
                                {product.Nombre}
                            </li>

                        ))
                    }
                    <div>
                    </div>
                </ul>
                <h1>Postres</h1>
                <ul>
                    {
                        data5.map(product => (
                            <li key={product.Id}>
                                {product.Nombre}
                            </li>

                        ))
                    }
                </ul>
            </div> 

     </div>  
            )
}
