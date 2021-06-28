import { fetchNotToken } from '../helpers/fetch';
import { types } from '../types/types';


export const TableStatusStartLoading = () => {

    return async (dispatch) => {

        try {
            console.log("pasa el get")
            const resp = await fetchNotToken('pedidos/allpedidos');
            const body = await resp.json();
            console.log(body);
            dispatch(TableStatusUiLoaded(body));

        } catch (error) {
            console.log(error);
        }

    }
}

export const changeStateTableOrders = (id) => {

    return async (dispatch) => {

        try {

            // await fetchNotToken('pedido/add',dataPedido, 'POST');
            await fetchNotToken(`pedidos/updstatemesadespachada/${id}`, {}, 'PUT');

            const resp = await fetchNotToken('pedidos/allpedidos');
            const body = await resp.json();

            dispatch(changeStateOrders(body));
            console.log(body);

        } catch (error) {
            console.log(error);
        }

    }
}

const TableStatusUiLoaded = (orders) => ({
    type: types.TableStatusUiLoaded,
    payload: orders
})

const changeStateOrders = (orders) => ({
    type: types.changeStateOrders,
    payload: orders,
})