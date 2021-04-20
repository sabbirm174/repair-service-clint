import React,{useContext,useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from './../../../App';
import './aside.css'
const Aside = ({service}) => {
    const [loggedInUsser,setLoggedInUser] =useContext(MyContext)
    const [isadmin, setIsAdmin] = useState(false)

    useEffect(()=>{
        fetch('https://stormy-crag-38445.herokuapp.com/isadmin',{
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: loggedInUsser.email}),
          })
          .then(res => res.json())
          .then(data => setIsAdmin(data))
    },[])

    return (
        <div className="col-md-2 h-1000 ">
            <div className='aside-container'>
            <Link to='/'>Home</Link><br/>
            <Link to='/booknow'>book now</Link><br/>
            <Link to='/bookinglist'>booking list</Link><br/>
            <Link to='/review'>Review</Link><br/>
            {isadmin && <div>
                <Link to='/orderlist'>Order List</Link><br/>
                <Link to='/admin'>add Admin</Link><br/>
                <Link to='/addservices'>add services</Link><br/>
                <Link to='/manageservice'>Manage Service</Link><br/>
            </div>
                
            }
            </div>
        </div>
    );
};

export default Aside;