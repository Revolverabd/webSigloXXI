import { fetchNotToken, fetchWithToken } from '../helpers/fetch';
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
                role: body.Rol
            }));
        } else {
            Swal.fire('Error', 'Usuario / Contraseña no son correctos', 'error');
        }
    }
}

export const startChecking = () => {

    return async (dispatch) => {

        const resp = await fetchWithToken('auth/renew');
        const body = await resp.json();

        if (body.msg === 'OK') {

            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid: body.Id,
                name: body.Nombre,
                role: body.Rol
            }));
        } else {

            dispatch(checkingFinish());

        }

    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });


export const startGoogleLogin = (Correo, googleId, Nombre, tokenId) => {
    return async (dispatch) => {

        const resp = await fetchNotToken('auth/google', { Correo, googleId, Nombre, tokenId }, 'POST');
        const body = await resp.json();

        if (body.msg === 'OK') {

            dispatch(loginGoogle({
                msg: body.msg,
                idGoogle: body.id,
                token: body.token,
                name: body.name,
                picture: body.picture,
                email: body.email,
            }));

            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            localStorage.setItem('name', body.name);
            localStorage.setItem('img', body.picture);

            localStorage.setItem('checking', body);
            

            setTimeout(function () {

                window.location.href = "/pbi/client";

            }, 1000);

        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}



//DISPATCHERS
const login = (user) => ({
    type: types.authLogin,
    payload: user
});

const loginGoogle = (user) => ({
    type: types.authLoginGoogle,
    payload: user
});

export const startLogout = () => {

    return (dispatch) => {
        localStorage.clear();
        dispatch(logout());
    }

}

const logout = () => ({ type: types.authLogout });
