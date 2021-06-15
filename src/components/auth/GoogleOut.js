import React from 'react';
import { GoogleLogout } from 'react-google-login';


const clientId = `180373228972-5vtvfovgfevufi4mhc4l9mu8qud6n5qh.apps.googleusercontent.com`;


export const GoogleOut = () => {

    const onSuccess = () => {
        console.log('Logout made successfully');
        alert('Logout made successfully ✌');
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    );
}

