import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import routes from '../routes';
import PageNotFound from '../views/pages/PageNotFound';

const PublicRoute = ({ restricted, ...rest}) => {
  const { pathname } = useLocation();
  const routePath = routes.map(x => x.path);
    // restricted = false meaning public route
    // restricted = true meaning restricted route
  return (<>
    {routes.map((route,idx) => {
      return (
      <Route 
        key={idx}
        path={route.path}
        exact={route.exact}
        name={route.name} 
        render={props => <route.component {...props} />}
      />)
      })
    }
  {!routePath.includes(pathname) && <Route path='*' exact={true} component={PageNotFound} />}
  </>);
};

export default PublicRoute;