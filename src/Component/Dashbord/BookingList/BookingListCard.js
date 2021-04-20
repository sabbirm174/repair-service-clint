import React from 'react';

const BookingListCard = ({book}) => {
    return (
            
  <tbody>
    <tr>
      <td>{book.name}</td>
      <td>{book.email}</td>
      <td>{book.service}</td>
      <td><button>{book.status}</button></td>
    </tr>
  </tbody>   
    );
};

export default BookingListCard;