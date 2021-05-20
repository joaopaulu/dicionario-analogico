import React from 'react';
import { isAllowesByRole, isAuthenticated, Role } from 'core/utils/auth';
import { Redirect, Route } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  path: string;
  allowedRoutes?: Role[];
};

const PrivateRoute = ({ children, path, allowedRoutes }: Props) => {
  return (
    <Route
      path={path}
      render={({ location }) => {
        if (!isAuthenticated()) {
          return (
            <Redirect
              to={{
                pathname: '/auth/login',
                state: { from: location },
              }}
            />
          );
        } else if (isAuthenticated() && !isAllowesByRole(allowedRoutes)) {
          return <Redirect to={{ pathname: '/admin/home' }} />;
        }
        return children;
      }}
    />
  );
};

export default PrivateRoute;
