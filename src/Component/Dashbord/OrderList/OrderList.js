import React from 'react';
import Aside from './../Aside/Aside';
import { useEffect } from 'react';
import { useState } from 'react';
import OrderListCard from './OrderListCard';

const OrderList = () => {
    const [bookingList,setBookingList] = useState([])
    useEffect(()=>{
        fetch('https://stormy-crag-38445.herokuapp.com/allbooking')
        .then(res=> res.json())
        .then(data=> setBookingList(data))
    },[])
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <Aside></Aside>
                    <div className="col-md-10">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">email</th>
                            <th scope="col">service</th>
                            <th scope="col">Status</th>
                            </tr>
                        </thead>
                        {
                            bookingList.map(booking=> <OrderListCard key={booking._id}booking={booking}></OrderListCard>)
                        }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;