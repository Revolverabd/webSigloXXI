import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { startLogout } from '../../actions/authAction';

export const NavBarDashboar = () => {


    const dispatch = useDispatch();
    const { name } = useSelector(state => state.auth)

    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/dashboard/uidashboard"
            > Dashboard Siglo XXI
            </Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/dashboard/diningroom"
                    >
                        Salón
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/dashboard/tablestatus"
                    >
                        Tablero
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink
                        activeClassName="desactive"
                        className="nav-item nav-link"
                        exact
                        to="/"
                    >
                        {name}
                    </NavLink>

                    <button
                        className="btn btn-outline-danger"
                        onClick={handleLogout}
                    >
                        <i className="fas fa-sign-out-alt"></i>
                        <span> Salir</span>
                    </button>


                </ul>
            </div>
        </nav>

    )
}
