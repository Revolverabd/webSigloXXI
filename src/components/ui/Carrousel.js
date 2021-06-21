import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import Image from 'react-bootstrap/Image'
import './uiStyle.css';

export const Carrousel = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src="https://res.cloudinary.com/rsxxi/image/upload/v1624153111/Carrousel/pie_rokfz1.webp"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/rsxxi/image/upload/v1624153111/Carrousel/pie_rokfz1.webp"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/rsxxi/image/upload/v1624153111/Carrousel/pie_rokfz1.webp"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
