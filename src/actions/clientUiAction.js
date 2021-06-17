import { fetchNotToken, fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';



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

            dispatch(precheckoutLoaded(product));

        } catch (error) {
            console.log(error);
        }
    }
}

const clientUiLoaded = (products) => ({
    type: types.clientUiLoaded,
    payload: products
})

const precheckoutLoaded = (product) => ({
    type: types.clientAddProduct,
    payload: product
})