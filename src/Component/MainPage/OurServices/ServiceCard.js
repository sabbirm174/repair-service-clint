import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({item}) => {

    const handleClick=(id)=>{
        console.log(id)
    }

    return (
        <div className='col-md-4 text-center'>
            <img className='img-fluid' src={item.serviceImg} alt=""/>
            <h4>{item.name}</h4>
            <h5>{item.email}</h5>
            <button onClick={()=>handleClick(item._id)}><Link to={`/dashboard/${item._id}`}>click</Link></button>
        </div>
    );
};

export default ServiceCard;