import React from 'react';
import { useEffect } from 'react';

const OrderListCard = ({booking}) => {

    
      const handleUpdate =(id,status)=>{
        const service ={status}
        fetch(`http://localhost:3000/${id}`,{
            method: 'patch',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(service)
        })
        .then(res=>res.json())
        .then(data=> console.log('updated'))
        .catch(err=> console.log('ee',err))
    }


    return (
        <tbody>
    <tr>
      <td>{booking.name}</td>
      <td>{booking.email}</td>
      <td>{booking.service}</td>
      <td><button className='btn btn-primary' onClick={()=>handleUpdate(booking._id,'pending')}>Pending</button><button className='btn btn-primary' onClick={()=>handleUpdate(booking._id,'On Going')}>on going</button><button className='btn btn-primary' onClick={()=>handleUpdate(booking._id,'done')}>done</button></td>
    </tr>
  </tbody> 
    );
};

export default OrderListCard;