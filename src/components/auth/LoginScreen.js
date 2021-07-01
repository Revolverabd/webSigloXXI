import React from 'react';
// import Swal from 'sweetalert2';

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/authAction';
import { useForm } from '../../hooks/useForm';
// import { GoogleIn } from './GoogleIn';
// import { GoogleOut } from './GoogleOut';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    // const {  } = useSelector(state => state.authGoogle);
    

    const [formLoginValues, handleLoginInputChange] = useForm({
        lCorreo: 'i.enriquez@rsxxi.cl',
        lContrasenia: '123456'
    });

    const { lCorreo, lContrasenia } = formLoginValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(lCorreo, lContrasenia));
    }

    return (

        <div className="container login-container">

            <div className="row justify-content-center">
                <div className="col-md-6 login-form-1 bgdiv">
                    <Link
                        className="navbar-brand"
                        to="/pbi"
                    >  Volver
                    </Link>
                    <h3>Ingreso Personal</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"

                                name="lCorreo"
                                value={lCorreo}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"

                                name="lContrasenia"
                                value={lContrasenia}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group login" >
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />   
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
