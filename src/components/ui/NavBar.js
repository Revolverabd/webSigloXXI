import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    
    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">

            <Link
                className="navbar-brand"
            > Restaurant Siglo XXI
            </Link>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <div className="navbar-nav">
                    <ul className="navbar-nav ml-auto">
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/pbi/client"
                        >
                            Ingreso como anonimo
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/pbi/login/client"
                        >
                            Ingreso como cliente google
                        </NavLink>
                    </ul>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/pbi/login"
                    >
                        Login Pesonal
                    </NavLink>
                </ul>
            </div>
        </nav>

    )
}
