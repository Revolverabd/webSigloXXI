import { fetchNotToken } from '../helpers/fetch';
import { types } from '../types/types';
// import Swal from 'sweetalert2';


export const clientStartLoading = () => {
    return async (dispatch) => {

        try {

            const resp = await fetchNotToken('productos/all');
            const body = await resp.json();

            console.log(body);

            dispatch(clientUiLoaded(body));

        } catch (error) {
            console.log(error);
        }

    }
}

export const addPrecheckout = (product) => {

    return async (dispatch) => {

        try {

            dispatch(precheckoutLoadedAdd(product));

        } catch (error) {
            console.log(error);
        }
    }
}

export const deletePrecheckout = (productId) => {

    return async (dispatch) => {

        try {

            dispatch(precheckoutLoadedDel(productId));

        } catch (error) {
            console.log(error);
        }
    }
}

const clientUiLoaded = (products) => ({
    type: types.clientUiLoaded,
    payload: products
})

const precheckoutLoadedAdd = (product) => ({
    type: types.clientAddProduct,
    payload: product
})

const precheckoutLoadedDel = (productId) => ({
    type: types.clientDeleteProduct,
    payload: productId
})