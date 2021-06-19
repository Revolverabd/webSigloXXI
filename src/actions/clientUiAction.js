import { fetchNotToken } from '../helpers/fetch';
import { types } from '../types/types';
// import Swal from 'sweetalert2';


export const clientStartLoading = () => {
    return async (dispatch) => {

        try {

            const resp = await fetchNotToken('productos/all');
            const body = await resp.json();

            // console.log(body);

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

export const increaseByOne = (product) => {

    return async (dispatch) => {

        try {

            dispatch(increaseByOneProduct(product));

        } catch (error) {
            console.log(error);
        }
    }
}

export const decreaseByOne = (product) => {

    return async (dispatch) => {

        try {

            dispatch(decreaseByOneProduct(product));

        } catch (error) {
            console.log(error);
        }
    }
}

export const resetProduct = (product) => {

    return async (dispatch) => {

        try {

            dispatch(oneResetProduct(product));

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

const increaseByOneProduct = (product) => ({
    type: types.increaseByOneProduct,
    payload: product
})

const decreaseByOneProduct = (product) => ({
    type: types.decreaseByOneProduct,
    payload: product
})

const oneResetProduct = (product) => ({
    type: types.oneResetProduct,
    payload: product
})

