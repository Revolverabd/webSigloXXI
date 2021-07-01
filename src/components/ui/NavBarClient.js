import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { GoogleOut } from '../../components/auth/GoogleOut';

export const NavBarClient = () => {

    // const dispatch = useDispatch();

    const { checking } = useSelector(state => state.authGoogle);
    let name = localStorage.getItem('name');

    console.log(name);

    const handleCloseTable = () => {
        // dispatch(startLogout());
    }

    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link className="navbar-brand"> Bienvenido a Restaurant Siglo XXI</Link>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" >
                <ul className="navbar-nav ml-auto">
                    <button hidden={checking ? false : true}
                        className="btn btn-outline-danger"
                        onClick={handleCloseTable}
                    >
                        <i className="fas fa-sign-out-alt"></i>
                        <span>Cerrar Mesa</span>
                    </button>


                </ul>
                    <div hidden={!checking ? false : true}>
                        <GoogleOut />
                    </div>
            </div>
        </nav>

    )
}