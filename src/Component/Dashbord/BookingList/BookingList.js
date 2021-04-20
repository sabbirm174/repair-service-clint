import React,{useEffect,useState,useContext} from 'react';
import { MyContext } from './../../../App';
import Aside from './../Aside/Aside';
import BookingListCard from './BookingListCard';


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
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service Name</th>
                            <th scope="col">Status</th>
                            </tr>
                        </thead>
                        {
                            bookingList.map(book=> <BookingListCard book={book}></BookingListCard>)
                        }
                    </table>
                    </div>
                </div>
            </div>
    );
};

export default BookingList;