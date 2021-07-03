import { fetchNotToken, fetchNotTokenWebpay } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';

//CLIENTE CARGA INICIAL
export const clientStartLoading = () => {
    return async (dispatch) => {

        try {

            const resp = await fetchNotToken('productos/all');
            const body = await resp.json();

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
                body = [{ id: "1", numMesa: 0, pedidoMesa: "NO ASIGNADO", total: 0, estado: 10, nombreEmpleado: "ANONIMO", estadoCocina: "NO ASIGNADO" }]
            }

            dispatch(clientUiPedidoLoaded(body));

        } catch (error) {
            console.log(error);
        }

    }
}

export const establecerPedido = (numMesa) => {
    return async (dispatch) => {

        try {

            await fetchNotToken(`pedidos/updMesa/${numMesa}`, {}, 'PUT');
            const resp = await fetchNotToken(`pedidos/pedidoMesa/${numMesa}`);
            const body = await resp.json();

            dispatch(establecePedidoLoaded(body));

        } catch (error) {
            console.log(error);
        }

    }
}

export const clientPedidosLoadingState = (numMesa) => {
    return async (dispatch) => {

        try {

            // await fetchNotToken(`pedidos/updMesa/${numMesa}`, {}, 'PUT');
            const resp = await fetchNotToken(`pedidos/pedidoMesa/${numMesa}`);
            const body = await resp.json();

            dispatch(establecePedidoLoaded(body));

        } catch (error) {
            console.log(error);
        }

    }
}



// PRECHECKOUT
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

// MODAL
export const uiOpenModal = () => ({ type: types.uiOpenModal });
export const uiCloseModal = () => ({ type: types.uiCloseModal });

export const uiOpenModalPedido = () => ({ type: types.uiOpenModalPedido });
export const uiCloseModalPedido = () => ({ type: types.uiCloseModalPedido });

export const uiOpenViewPedido = () => ({ type: types.uiOpenViewPedido });
export const uiCloseViewPedido = () => ({ type: types.uiCloseViewPedido });


//PEDIDO
export const uiSendPedido = (pedido) => {

    return async (dispatch) => {

        try {

            const resp = await fetchNotToken('pedidos/add', pedido, 'POST');
            const body = await resp.json();

            if (body.msg === 'OK') {

                dispatch(uiCloseModalPedido());
                dispatch(sendPedido());

                Swal.fire('¡YUJU!', 'Pedido enviado con exito', 'success');

            } else {

                // dispatch(checkingFinish());

            }
        } catch (error) {
            console.log(error);
        }

    }
}



//PAGO WEBPAY
export const actionWebpay = async (transact) => {

    try {

        const resp = await fetchNotTokenWebpay(`webpay/create`, transact, 'POST');
        const body = await resp.json();

        // console.log(`soy un body ${body}`)

        return body;

    } catch (error) {

        console.log(error);
        return false;

    }

}

export const tansactPagoDb = async (transactDb) => {

    try {
        await fetchNotToken(`pago/create`, transactDb, 'POST');
    } catch (error) {
        console.log(error);
    }
}

export const finalTable = async (numMesa) => {

    try {
        await fetchNotToken(`pago/final/${numMesa}`,{}, 'POST');

        setTimeout(function () {
            window.location.href = "/";
        }, 1000);

    } catch (error) {
        console.log(error);
    }
}





//DISPATCHERS
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

const sendPedido = () => ({
    type: types.sendPedido,
    payload: []
})





