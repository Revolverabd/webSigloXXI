import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

import Swal from 'sweetalert2';

import { startGoogleLogin } from '../../actions/authAction';
import { finalTable } from '../../actions/clientUiAction';
// import { refreshTokenSetup } from '../../utils/refreshTokenSetup';

const clientId = `180373228972-5vtvfovgfevufi4mhc4l9mu8qud6n5qh.apps.googleusercontent.com`;

export const NavBarClient = () => {


    const { pedido } = useSelector(state => state.clientUi);

    let numMesa = pedido[0].numMesa;

    const [name, setName] = useState(localStorage.getItem('name'));

    const dispatch = useDispatch();

    ///////////////////////////
    ///////////////////////////

    const onSuccess = async (res) => {

        const { email, googleId, name } = res.profileObj;
        const tokenId = res.tokenId;
        await dispatch(startGoogleLogin(email, googleId, name, tokenId));
        // await refreshTokenSetup(res);
        await setName(localStorage.getItem('name'));
    }

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    }

    ///////////////////////////
    ///////////////////////////

    const onSuccessOut = async () => {
        await localStorage.clear();
        await setName(localStorage.getItem('name'));
        Swal.fire('¡O.O!', 'Sesión finalizada', 'info');
    };

    ///////////////////////////
    ///////////////////////////

    console.log(name);

    const handleCloseTable = async () => {
        await localStorage.clear();
        await onSuccessOut();
        await finalTable(numMesa);
    }

    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link className="navbar-brand"> Bienvenido a Restaurant Siglo XXI</Link>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" >

                <ul className="navbar-nav ml-auto">

                    <div hidden={name !== null ? false : true}>
                        <Link className="navbar-brand"> {name} </Link>
                        <GoogleLogout
                            clientId={clientId}
                            buttonText="Logout"
                            onLogoutSuccess={onSuccessOut}
                        ></GoogleLogout>

                    </div>

                    <div hidden={name !== null ? true : false}>
                        <Link className="navbar-brand"> Invitado </Link>
                        <GoogleLogin
                            clientId={clientId}
                            buttonText="Login"
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            cookiePolicy={'single_host_origin'}
                            style={{ marginTop: '100px' }}
                            isSignedIn={true}
                        />
                    </div>

                    <button
                        className="btn btn-outline-danger espacio"
                        onClick={handleCloseTable}
                    >
                        <i className="fas fa-sign-out-alt"></i>
                        <span>Cerrar Mesa</span>
                    </button>
                </ul>
            </div>
        </nav>

    )
}