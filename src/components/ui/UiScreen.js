import React from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { Carrousel } from './Carrousel';

export const UiScreen = () => {
    return (
        <div className="backGroudCarrusel" >
            <NavBar />
            <div className="bordeTopHome bg-dark text-center text-white">
                <h1 id="tituloHome">Bienvenido a Restaurant Siglo XXI</h1>
            </div>
            <div className="">

                <div className="containerCarrusel">
                    <Carrousel />
                </div>


                <Footer />
            </div>

        </div>
    )
}
