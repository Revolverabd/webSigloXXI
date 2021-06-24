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

export const clientPedidoLoading = () => {
    return async (dispatch) => {

        try {

            const resp = await fetchNotToken('pedidos/all');
            let body = await resp.json();

            if (body.length === 0) {
                body = [{ id: "123", numMesa: 999, pedidoMesa: "lalal", total: 0, estado: 9, nombreEmpleado: "tulio" }]
            }

            console.log(body);

            dispatch(clientUiPedidoLoaded(body));

        } catch (error) {
            console.log(error);
        }

    }
}

export const establecerPedido = (numMesa) => {
    return async (dispatch) => {

        try {
            console.log(numMesa)
            await fetchNotToken(`pedidos/updMesa/${numMesa}`,{} ,'PUT');
            const resp = await fetchNotToken(`pedidos/pedidoMesa/${numMesa}`);
            const body = await resp.json();

            dispatch(establecePedidoLoaded(body));

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

export const uiOpenModal = () => ({ type: types.uiOpenModal });
export const uiCloseModal = () => ({ type: types.uiCloseModal });

export const uiOpenModalPedido = () => ({ type: types.uiOpenModalPedido });
export const uiCloseModalPedido = () => ({ type: types.uiCloseModalPedido });

export const uiSendPedido = (pedido) => {

    return async (dispatch) => {

        try {

            dispatch(sendPedido(pedido));

        } catch (error) {
            console.log(error);
        }
    }
}




const clientUiLoaded = (products) => ({
    type: types.clientUiLoaded,
    payload: products
})

const clientUiPedidoLoaded = (pedidos) => ({
    type: types.clientUiPedidoLoaded,
    payload: pedidos
})

const establecePedidoLoaded = (pedidos) => ({
    type: types.establecePedidoLoaded,
    payload: pedidos
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


const sendPedido = (pedido) => ({
    type: types.sendPedido,
    payload: pedido
})



