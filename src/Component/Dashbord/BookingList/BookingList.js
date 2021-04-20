import React,{useEffect,useState,useContext} from 'react';
import { MyContext } from './../../../App';
import Aside from './../Aside/Aside';


const BookingList = () => {
    const [loggedInUsser,setLoggedInUser] = useContext(MyContext)
    const [bookingList, setBookingList] = useState([])
    useEffect(()=>{
        fetch('https://stormy-crag-38445.herokuapp.com/isadminservice',{
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email:loggedInUsser.email}),
          })
          .then(res=>res.json())
          .then(data=> setBookingList(data))
    },[])
    return (
            <div className="container-fluid">
                <div className="row">
                    <Aside></Aside>
                    <div className="col-md-10">
                        {
                            bookingList.map(book=> <p>{book.name}</p>)
                        }
                    </div>
                </div>
            </div>
    );
};

export default BookingList;