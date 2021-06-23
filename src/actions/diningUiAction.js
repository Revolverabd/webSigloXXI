import { fetchNotToken } from '../helpers/fetch';
import { types } from '../types/types';
// import Swal from 'sweetalert2';


export const diningStartLoading = () => {

    return async (dispatch) => {

        try {

            const resp = await fetchNotToken('mesas/all');
            const body = await resp.json();

            dispatch(diningUiLoaded(body));

        } catch (error) {
            console.log(error);
        }

    }
}

export const changeStateTable = (numeroMesa, data, dataPedido) => {

    return async (dispatch) => {

        try {

            await fetchNotToken('pedido/add',dataPedido, 'POST');
            await fetchNotToken('mesas/upd/' + numeroMesa, data, 'PUT');
            
            const resp = await fetchNotToken('mesas/all');
            const body = await resp.json();

            dispatch(changeState(body));

        } catch (error) {
            console.log(error);
        }

    }
}

const diningUiLoaded = (tables) => ({
    type: types.diningUiLoaded,
    payload: tables
})

const changeState = (tables) => ({
    type: types.changeState,
    payload: tables,
})
