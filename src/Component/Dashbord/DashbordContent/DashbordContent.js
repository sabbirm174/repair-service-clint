import React from 'react';
import BookingList from '../BookingList/BookingList';
import Review from '../Review/Review';
import BookNow from './../BookNow/BookNow';

const DashbordContent = () => {
    return (
        <div className="container">
            <div className='col-md-10'>
                <BookNow></BookNow>
                {/* <BookingList></BookingList>
                <Review></Review> */}
            </div>
        </div>
    );
};

export default DashbordContent;