import React from 'react';
import './card.css'
import { Link, Router } from 'react-router-dom';
const Card = (props) => {
    const {id,name,img} = props.ride;

    return (
        <Link to={'/vehicle/'+name} class="card text-center" >
        <img class="card-img-top" src={img} alt={name}/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
            </div>
        </Link>
    );
};

export default Card;