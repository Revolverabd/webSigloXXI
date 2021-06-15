import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clientStartLoading } from '../../actions/clientUiAction';
import { getProductByCategory } from '../../selectors/getProductByCategory';

export const ProductList = (products, category ) => {

    // const mapStateToProps = (store) => ({
        
    //  })

    // const dispatch = useDispatch();

    console.log(category)
    console.log(products)
    // const { products } = useSelector(state => state.clientUi);


    const productsList = getProductByCategory(category, products);

    // useEffect(() => {

    //     dispatch(clientStartLoading());

    // }, [dispatch])

    console.log(productsList)

    return (
        <div>

            <ul>
                {
                    productsList.map(product => (
                        <li key={product.Id}>
                            {product.Nombre}
                        </li>

                    ))
                }
            </ul>
        </div>
    )

}
