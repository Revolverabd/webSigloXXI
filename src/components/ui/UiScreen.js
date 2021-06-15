import React from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { Carrousel } from './Carrousel';

export const UiScreen = () => {
    return (
        <div>
            <NavBar />
            <Carrousel />
            <h1>Presentación del retaurant</h1>

            <Footer />
        </div>
    )
}
