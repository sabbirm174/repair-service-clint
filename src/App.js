import React, { createContext, useState } from 'react';
import SignUp from './component/SignUp/SignUp';
import LogedIn from './component/LogedIn/LogedIn';
import Home from './component/Home/Home'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Card from './component/Card/Card';
import Header from './component/Header/Header';
import {VehicleDetails} from './component/vehicleDetails/VehicleDetails';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
export const MyContext = createContext();

const App = () => {
  const [search, setSearch] = useState({
    from: '',
    to: ''
  })
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <MyContext.Provider value={[loggedInUser, setLoggedInUser,search, setSearch]}>
      <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/signUp">
              <SignUp/>
            </Route>
            <Route  path="/login">
              <LogedIn />
            </Route>
            <PrivateRoute  path="/vehicle/:name">
              <VehicleDetails />
            </PrivateRoute>
          </Switch>
      </Router>
      
    </MyContext.Provider>
  );
};

export default App;