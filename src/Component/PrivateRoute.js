import React,{useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { MyContext } from '../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUsser,setLoggedInUser] = useContext(MyContext)
    return (
        <Route
        {...rest}
        render={({ location }) =>
        (loggedInUsser.email ) ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;