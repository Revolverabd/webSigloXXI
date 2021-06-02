// import React, { Component } from 'react'
// import { GoogleLogin, GoogleLogout } from 'react-google-login';


// const CLIENT_ID = '180373228972-5vtvfovgfevufi4mhc4l9mu8qud6n5qh.apps.googleusercontent.com';

// export class GoogleIn extends Component {

//     constructor(props) {
//     super(props);

//     this.state = {
//       isLogined: false,
//       accessToken: ''
//     };

//     this.login = this.login.bind(this);
//     this.handleLoginFailure = this.handleLoginFailure.bind(this);
//     this.logout = this.logout.bind(this);
//     this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
//   }

//   login (response) {
//     if(response.accessToken){
//       this.setState(state => ({
//         isLogined: true,
//         accessToken: response.accessToken
//       }));
//     }
//   }

//   logout (response) {
//     this.setState(state => ({
//       isLogined: false,
//       accessToken: ''
//     }));
//   }

//   handleLoginFailure (response) {
//     alert('Failed to log in')
//   }

//   handleLogoutFailure (response) {
//     alert('Failed to log out')
//   }

//   render() {
//     return (
//     <div>
//       { this.state.isLogined ?
//         <GoogleLogout
//           clientId={ CLIENT_ID }
//           buttonText='Logout'
//           onLogoutSuccess={ this.logout }
//           onFailure={ this.handleLogoutFailure }
//         >

//         </GoogleLogout>: <GoogleLogin
//           clientId={ CLIENT_ID }
//           buttonText='Login'
//           onSuccess={ this.login }
//           onFailure={ this.handleLoginFailure }
//           cookiePolicy={ 'single_host_origin' }
//           responseType='code,token'
//         />
//       }
//       { this.state.accessToken ? <h5>Your Access Token: <br/><br/> { this.state.accessToken }</h5> : null }

//     </div>
//     )
//   }
// }


import React from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { startGoogleLogin } from '../../actions/authAction';

const clientId = `180373228972-5vtvfovgfevufi4mhc4l9mu8qud6n5qh.apps.googleusercontent.com`;

export const GoogleIn = () => {

    const dispatch = useDispatch();

    const onSuccess = (res) => {
        const { email, googleId, name } = res.profileObj;
        const tokenId = res.tokenId;

        dispatch(startGoogleLogin(email, googleId, name, tokenId));
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
            />

        </div>
    )
}

