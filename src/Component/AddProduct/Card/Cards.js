import React, { useContext } from 'react';
import "./card.css"
import { MyContext } from './../../../App';
import { Link } from 'react-router-dom';
const Cards = ({allData}) => {
    const {name, _id,price,imageUrl} = allData;
    const setSingleProduct = useContext(MyContext)
    const handleGetId =(id)=>{
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        console.log(id, date)
        fetch(`https://stormy-crag-38445.herokuapp.com/edit/${id}`)
        .then(res=>res.json())
        .then(data=> console.log(data))
    }
    return (
        <div>
            <div className="card">
            <div className='card-img-height'>
                <img className="card-img-top" src={imageUrl} alt={name} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <span className="card-text price">{price}</span>
                <Link to={`/singleProduct/${_id}`} onClick={()=>handleGetId(_id)} className="btn float-right btn-primary">Buy Now</Link>
            </div>
            </div>
        </div>
    );
};

export default Cards;