import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import LoadingPage from "../components/antd/LoadingPage";
import PublicRoute from './PublicRoute';

export default (props) => {
  return(
  <BrowserRouter>
    <React.Suspense fallback={<LoadingPage/>}>
      <Switch>
        <PublicRoute restricted={false} />
        {/* <PublicRoute restricted={true} component={SignIn} path="/signin" exact />
        <PrivateRoute component={Dashboard} path="/dashboard" exact /> */}
      </Switch>
    </React.Suspense>
  </BrowserRouter>
  );
};