import React from 'react'
import { NavBarDashboar } from '../ui/NavBarDashboar';

export const UiDashboard = () => {
    const parrafo = "Administración de asignación de mesas y estado de pedidos en cocina.";
    return (
        <div>
            <NavBarDashboar />
            <div className="dashboarImg">
                <div className="dashboarTituloCenter">
                    <span id="dashboarEstiloTitulo">
                        Dashboard
                    </span>
                </div>
                <div className="dashboarFloatLeft">
                    <div className="hijo">
                        <span id="dashboarEstiloParrago">
                            {parrafo}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
