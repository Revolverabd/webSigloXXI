import React from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { Carrousel } from './Carrousel';

export const UiScreen = () => {
    return (
        <div>
            <NavBar />
            <h1>Bienvenido a Restaurant Siglo XXI</h1>
            <Carrousel />

            <Footer />
        </div>
    )
}
