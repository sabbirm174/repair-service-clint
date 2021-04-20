import React from 'react';
import { Link } from 'react-router-dom';



const HeaderContent = () => {
    return (
        <div className="container">
            <div className='row align-items-center'>
                <div className="col-md-5">
                    <h1>We Builed Your Dream</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ratione!</p>
                    <button className='btn btn-primary'><Link to='/dashboard'>Click me</Link></button>

                </div>
                <div className="col-md-7">
                    <img className='img-fluid'  alt=""/>
                </div>
            </div>
        </div>
        
    );
};

export default HeaderContent;