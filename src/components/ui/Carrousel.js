import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import Image from 'react-bootstrap/Image'
// import './uiStyle.css';

export const Carrousel = () => {
    return (
        <div>
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/rsxxi/image/upload/v1625065792/Carrousel/salmon_f3tukk.png"
                    alt="First slide"
                />
                <Carousel.Caption className="fondoTextCarrusel">
                    <h3>UN CONCEPTO NUEVO</h3>
                    <p>Modernos en el estilo y clásicos en el sabor.</p>
                </Carousel.Caption >
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/rsxxi/image/upload/v1625065792/Carrousel/pie_bh8rdb.png"
                    alt="Second slide"
                />

                <Carousel.Caption className="fondoTextCarrusel">
                    <h3>UN CONCEPTO MEDIEVAL</h3>
                    <p>Firmes defensores de que calidad no está en el precio, sino en el producto</p>
                </Carousel.Caption >
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/rsxxi/image/upload/v1625065792/Carrousel/mojito_uujlm7.png"
                    alt="Third slide"
                />

                <Carousel.Caption className="fondoTextCarrusel">
                    <h3>UN CONCEPTO IMPORTANTE</h3>
                    <p>Exigentes porque también somos consumidores y estamos convencidos de que la experiencia debe resultar completa.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    )
}
