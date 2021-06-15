import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import './clientUiStyle.css';


export const ProductCard = ({
    Id,
    Nombre,
    Descripcion,
    PrecioNeto,
    Estado,
    Categoria,
    IdImagen,
    NombreImagen


}) => {
    return (

        <div className="card ms-3 animate__animated animate__fadeIn">
            <Card style={{ width: '18rem' }}>
                <img className="Card" variant="top" src={NombreImagen} />
                <Card.Body>
                    <Card.Title>{Nombre}</Card.Title>
                    <Card.Text>
                        {Descripcion}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>

    )
}
