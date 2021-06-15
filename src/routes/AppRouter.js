import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  // Route,
  Redirect
} from 'react-router-dom';

import { startChecking } from '../actions/authAction';

// import { LoginScreen } from '../components/auth/LoginScreen';
// import { ClientUiScreen } from '../components/clientUi/ClientUiScreen';
// import { UiScreen } from '../components/ui/UiScreen';

import { DashboardRouter } from './DashboardRouter';
import { PbiRouter } from './PbiRouter';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  const dispatch = useDispatch();

  const { checking, uid, role, idGoogle } = useSelector(state => state.auth);

  useEffect(() => {

    dispatch(startChecking());

  }, [dispatch])

  console.log(checking, uid, role, idGoogle)

  return (

    <Router>

      <div>

        <Switch>

          <PublicRoute
            path="/pbi"
            component={PbiRouter}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            path="/"
            component={DashboardRouter}
            isAuthenticated={!!uid}
          />

          <Redirect to="/" />

        </Switch>

      </div>

    </Router>
  )
}
