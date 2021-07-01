import React from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { startGoogleLogin } from '../../actions/authAction';
import { refreshTokenSetup } from '../../utils/refreshTokenSetup';

const clientId = `180373228972-5vtvfovgfevufi4mhc4l9mu8qud6n5qh.apps.googleusercontent.com`;

export const GoogleIn = () => {

    const dispatch = useDispatch();

    const onSuccess = (res) => {
        const { email, googleId, name } = res.profileObj;
        const tokenId = res.tokenId;

        dispatch(startGoogleLogin(email, googleId, name, tokenId));
  
        refreshTokenSetup(res);
    }
    
    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    }

    

    return (
        <div>
          <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '100px' }}
            isSignedIn={true}
          />
        </div>
      );
}

