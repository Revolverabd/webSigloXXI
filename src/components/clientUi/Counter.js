import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    deletePrecheckout,
    increaseByOne,
    decreaseByOne,
    resetProduct
} from '../../actions/clientUiAction';



export const Counter = () => {

    const { listProduct } = useSelector(state => state.clientUi);

    const dispatch = useDispatch();

    const handleIncreaseByOne = (Id) => {

        let [data] = listProduct.filter(data => data.id === Id);

        data.counter = data.counter + 1;
        data.subTotal = data.counter * data.precio;

        const productsIncreased = listProduct.map(function (product) {

            if (product.id === Id) {
                product.subTotal = data.subTotal;
                product.counter = data.counter;
            }

            return product;
        });

        // console.log(task_names);

        dispatch(increaseByOne(productsIncreased));

    }

    const handleDecreaseByOne = (Id) => {

        let [data] = listProduct.filter(data => data.id === Id);

        if (data.counter !== 1) {

            data.counter = data.counter - 1;
            data.subTotal = data.counter * data.precio;

        }

        const productsDecreased = listProduct.map(function (product) {

            if (product.id === Id) {
                product.subTotal = data.subTotal;
                product.counter = data.counter;
            }

            return product;
        });

        dispatch(decreaseByOne(productsDecreased));

    }

    const handleResetProduct = (Id) => {
        
        let [data] = listProduct.filter(data => data.id === Id);
        
        if (data.counter !== 1) {
            data.counter = 1;
            data.subTotal = data.precio;
        }

        const productsReset = listProduct.map(function (product) {
        
            if (product.id === Id) {
                product.subTotal = data.subTotal;
                product.counter = data.counter;
            }
        
            return product;
        
        });

        dispatch(resetProduct(productsReset));

    }

    const handleClickDelete = (productId) => {

        dispatch(deletePrecheckout(productId));

    }

    return (

        <ul className="list-group list-group-flush text-center ">
        {
            listProduct.map((oneProduct) => (
                <div
                    key={oneProduct.id}
                    className="listaproducto"
                >
                    <div>

                        <div className="margenTituloListProleft">
                            <h5 className=" "> {oneProduct.name}</h5>
                            <h5 className="text-left "> ${oneProduct.precio}</h5>
                        </div>
                        <div className="margenTituloListPro">
                            <h5 className=" ">Sub Total: ${oneProduct.subTotal}</h5>
                            <div className="divBotonListPro">
                                <button
                                    className="botonListPro Left"
                                    type="submit"
                                    onClick={() => handleDecreaseByOne(oneProduct.id)}
                                >
                                    -
                                </button>
                                <button className="botonListPro count">{oneProduct.counter}</button>
                                
                                <button
                                    className="botonListPro"
                                    type="submit"
                                    onClick={() => handleIncreaseByOne(oneProduct.id)}
                                >
                                    +
                                </button>
                                <button
                                className="botonListProV"
                                type="submit"
                                onClick={() => handleResetProduct(oneProduct.id)}
                            >
                                Reset
                            </button>
                                <button
                                    className="botonListPro Right "
                                    type="submit"
                                    onClick={() => handleClickDelete(oneProduct.id)}
                                >
                                    <i class='fas'>&#xf2ed;</i>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            ))
        }
    </ul>
    )
}
