import React from 'react';
import { GoogleLogin } from 'react-google-login';


const clientId = `180373228972-5vtvfovgfevufi4mhc4l9mu8qud6n5qh.apps.googleusercontent.com`;


export const GoogleIn = () => {

    const onSuccess = (res) => {
        console.log('[Login Success] CurrentUser:', res.profileObj);
    }

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}                
            />
        </div>
    )
}
