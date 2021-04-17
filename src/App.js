import React,{createContext,useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import MainPage from './Component/MainPage/MainPage';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Dashbord from './Component/Dashbord/Dashbord';
import Login from './Component/Login/Login';

export const MyContext = createContext()


const App = () => {
  const [logedInUser, setLogedInUser] = useState({});
  const [singleService, setSingleService] = useState({})
  return (
    <MyContext.Provider value={[logedInUser,setLogedInUser,setSingleService,singleService]}>
      <Router>
          <Switch>
            <Route exact path="/">
              <MainPage></MainPage>
            </Route>
            
            
            <Route path="/dashboard/:id">
              <Dashbord></Dashbord>
            </Route>
          </Switch>
      </Router>
    </MyContext.Provider>
  );
};

export default App;