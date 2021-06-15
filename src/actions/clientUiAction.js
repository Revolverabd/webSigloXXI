import { fetchNotToken, fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';



export const clientStartLoading = () => {
    return async (dispatch) => {


        console.log('listoco ksabkjadsbc');

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

const clientUiLoaded = (products) => ({
    type: types.clientUiLoaded,
    payload: products
})