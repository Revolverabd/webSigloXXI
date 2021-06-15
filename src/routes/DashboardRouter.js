import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { UiDashboard } from '../components/dashboard/UiDashboard';

import { DiningRoomScreen } from '../components/diningRoom/DiningRoomScreen';
import { TableStatusScreen } from '../components/tableStatus/TableStatusScreen';

export const DashboardRouter = () => {
    return (
        <div>
            <Switch>

                <Route exact path="/uidashboard" component={ UiDashboard } />
                <Route exact path="/dashboard/diningroom" component={ DiningRoomScreen } />
                <Route exact path="/tablestatus" component={ TableStatusScreen } />
                

                <Redirect to="/uidashboard" />
            </Switch>

        </div>
    )
}
