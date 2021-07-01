import React from 'react';
// import Swal from 'sweetalert2';

import { Link } from 'react-router-dom'
import { GoogleIn } from './GoogleIn';

export const LoginClientScreen = () => {

    return (

        <div className="container login-container">

            <div className="row justify-content-center">
                <div className="col-md-6 login-form-1 bgdiv">
                    
                    <Link
                        className="navbar-brand"
                        to="/pbi"
                    >  Volver
                    </Link>

                    <div className="form-group login">
                        <div className="form-group login">
                            <h3>Ingreso clientes</h3>
                            <h3>con cuenta google</h3>
                            <GoogleIn />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
