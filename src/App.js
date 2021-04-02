import React, { createContext, useState } from 'react';
import {BrowserRouter as Router,Switch, Route,Link} from "react-router-dom";
import AddProduct from './Component/AddProduct/AddProduct/AddProduct';
import Home from './Component/AddProduct/Home/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Header from './Component/AddProduct/Header/Header';
import SingleProduct from './Component/AddProduct/SingleProduct/SingleProduct';
import CheckOut from './Component/AddProduct/CheckOut/CheckOut';
import SignIn from './Component/AddProduct/SignIn/SignIn';
import PrivateRoute from './Component/AddProduct/PrivateRoute/PrivateRoute';
import DeleteProduct from './Component/AddProduct/DeleteProduct/DeleteProduct';
import Admin from './Component/AddProduct/Admin/Admin';




export const MyContext = createContext()
const App = () => {
  const [logedInUser, setLogedInUser] = useState({})
  const [singleProductData,setSingleProductData] =  useState({})
  return (
    <MyContext.Provider value={[logedInUser,setLogedInUser,singleProductData,setSingleProductData]}>
      <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/addProduct">
              <AddProduct/>
            </Route>
            <Route path="/manageProduct">
              <DeleteProduct/>
            </Route>
            <PrivateRoute path="/singleProduct/:id">
              <SingleProduct/>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <CheckOut/>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin/>
            </PrivateRoute>
            <Route path="/checkOut">
              <CheckOut/>
            </Route>
            <Route path="/signIn">
              <SignIn/>
            </Route>
            <Route path="/delete">
              <DeleteProduct/>
            </Route>
          </Switch>
      </Router>
    </MyContext.Provider>
  );
};

export default App;