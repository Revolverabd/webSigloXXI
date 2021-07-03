import React from 'react';
import Swal from 'sweetalert2';


export const Pago = () => {


    Swal.fire('¡OK!', 'Pago Realizado con Éxito', 'success')

    setTimeout(function () {

        window.location.href = "/";

    }, 4000);

    return (
        <div className="pagoDivImg">


        </div>
    )
}
