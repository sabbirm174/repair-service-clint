import React, { useContext } from 'react';
import { MyContext } from './../../../App';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser] = useContext(MyContext);
    return (
        <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signIn",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;