import React, { useContext, createContext, useState } from "react";
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router,Switch,Route,Link,Redirect,useHistory,useLocation} from "react-router-dom";
import Login from './Component/Login';
import Another from "./Component/Another";
import PrivateRoute from './Component/PrivateRoute';
import Home from './Component/Home';
import Dashbord from './Component/Dashbord/Dashboard/Dashbord';
import MainPage from "./Component/MainPage/MainPage";
import Aside from './Component/Dashbord/Aside/Aside';
import BookingList from './Component/Dashbord/BookingList/BookingList';
import BookNow from './Component/Dashbord/BookNow/BookNow';
import Review from './Component/Dashbord/Review/Review';
import ManageService from './Component/Dashbord/ManageService/ManageService';
import Admin from './Component/Dashbord/Admin/Admin';
import OrderList from './Component/Dashbord/OrderList/OrderList';
import AddServices from "./Component/Dashbord/AddServices/Addservices";
import './app.css'



export const MyContext = createContext()

const App = () => {
  const[loggedInUsser,setLoggedInUser] = useState({})
  const[singleServiceBooking,setSingleServiceBooking] = useState({})
  
  return (
    <MyContext.Provider value={[loggedInUsser,setLoggedInUser,singleServiceBooking,setSingleServiceBooking]}>
      
      <Router>
        <Switch>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/admin'>
            <Admin></Admin>
          </Route>
          <Route path='/booknow'>
            <Dashbord></Dashbord>
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <Route path='/orderlist'>
            <OrderList></OrderList>
          </Route>
          <Route path='/aside'>
            <Aside></Aside>
          </Route>
          <Route exact path='/'>
            <MainPage></MainPage>
          </Route>
          <Route exact path='/manageservice'>
            <ManageService></ManageService>
          </Route>
          <Route exact path='/bookinglist'>
            <BookingList></BookingList>
          </Route>
          <Route exact path='/addservices'>
            <AddServices></AddServices>
          </Route>
          <PrivateRoute path='/dashboard/:id'>
            <Dashbord></Dashbord>
          </PrivateRoute>
        </Switch>
      </Router>
    </MyContext.Provider>
  );
};

export default App;