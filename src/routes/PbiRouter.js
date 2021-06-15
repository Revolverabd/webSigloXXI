import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { ClientUiScreen } from '../components/clientUi/ClientUiScreen';
import { UiScreen } from '../components/ui/UiScreen';


export const PbiRouter = () => {
    return (
        <div>
            <Switch>

                <Route
                    exact path="/pbi/login"
                    component={LoginScreen}
                // isAuthenticated={!!uid}
                />

                <Route
                    exact path="/pbi/client"
                    component={ClientUiScreen}
                // isAuthenticated={!!uid}
                />

                <Route
                    exact path="/pbi"
                    component={UiScreen}
                // isAuthenticated={!!uid}
                />

                <Redirect to="/pbi" />
            </Switch>

        </div>
    )
}
