import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
    let auth = true
    return (
      <Route
        {...rest}
        render={() => auth
          ? children
          : <Redirect to="/login" />
        }
      />
    );
  }
  
export default PrivateRoute;