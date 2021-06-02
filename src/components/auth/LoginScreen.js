import React from 'react';
import Swal from 'sweetalert2';

import { useDispatch } from 'react-redux';
import { startLogin, startRegister } from '../../actions/authAction';
import { useForm } from '../../hooks/useForm';
import { GoogleIn } from './GoogleIn';
import './loginStyle.css';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formLoginValues, handleLoginInputChange] = useForm({
        lCorreo: 'i.enriquez@rsxxi.cl',
        lContrasenia: '123456'
    });

    const [formRegisterValues, handleRegisterInputChange] = useForm({
        // rRut: '16550486-0',
        rNombre: 'Pedro',
        rCorreo: 'i.enriquez@rsxxi.cl',
        rContrasenia1: '123456',
        rContrasenia2: '123456'
    });

    const { lCorreo, lContrasenia } = formLoginValues;
    const { rNombre, rCorreo, rContrasenia1, rContrasenia2 } = formRegisterValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(lCorreo, lContrasenia));
    }

    const handleRegister = (e) => {
        e.preventDefault();

        if (rContrasenia1 !== rContrasenia2) {
            return Swal.fire('Error', 'Las contraseñas no son iguales', 'error');
        }

        dispatch(startRegister(rNombre, rCorreo, rContrasenia1));

    }

    return (

        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
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
                            <div className="form-group">
                                <GoogleIn />
                            </div>
                        </div>
                    </form>
                </div>


                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"

                                name="rNombre"
                                value={rNombre}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"

                                name="rCorreo"
                                value={rCorreo}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"

                                name="rContrasenia1"
                                value={rContrasenia1}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"

                                name="rContrasenia2"
                                value={rContrasenia2}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
