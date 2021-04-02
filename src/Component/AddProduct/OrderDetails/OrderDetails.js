import React from 'react';

const OrderDetails = ({data}) => {
     const {name,email,price,date} = data
    return (
        <tr className=" text-center">
        <th scope="col">{name}</th>
        <th scope="col">{email}</th>
        <th scope="col">{date}</th>
        <th scope="col">{price}</th>
      </tr>
    );
};

export default OrderDetails;