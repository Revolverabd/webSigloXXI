import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
        <Link 
            className="navbar-brand" 
            to="/pbi"
        > Restaurant Siglo XXI
        </Link>

        <div className="navbar-collapse">
            <div className="navbar-nav">

                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/pbi/client"
                >
                    Carta
                </NavLink>

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
                    Login
                </NavLink>
            </ul>
        </div>
    </nav>

    )
}
