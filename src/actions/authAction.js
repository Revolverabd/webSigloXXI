import { fetchNotToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';

export const startLogin = (Correo, Contrasenia) => {

    return async (dispatch) => {

        const resp = await fetchNotToken('auth/login', { Correo, Contrasenia }, 'POST');
        const body = await resp.json();

        if (body.msg === 'OK') {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid: body.Id,
                name: body.Nombre,
                lasName: body.Apellido
            }));
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}


export const startGoogleLogin = (Correo, googleId, Nombre, tokenId) => {
    return async (dispatch) => {
       
        const resp = await fetchNotToken('auth/google', { Correo, googleId, Nombre, tokenId }, 'POST');
        const body = await resp.json();

        if (body.msg === 'OK') {
        
            // console.log('llegamos al backend');
            // localStorage.setItem('token', body.token);
            // localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                correo: body.Correo,
                googleId: body.googleId,
                nombre: body.Nombre,
                tokenId: body.tokenId
            }));
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}



export const startRegister = (Nombre, Correo, Contrasenia) => {

    return async (dispatch) => {

        const resp = await fetchNotToken('auth/new', { Nombre, Correo, Contrasenia }, 'POST');
        const body = await resp.json();

        if (body.msg === 'OK') {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid: body.Id,
                name: body.Nombre,
                lasName: body.Apellido
            }));
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}



const login = (user) => ({
    type: types.authLogin,
    payload: user
});