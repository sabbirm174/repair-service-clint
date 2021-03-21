import React from 'react';
import Data from './../Data/Data';
import Card from './../Card/Card';
import Header from './../Header/Header';
import './home.css'
const Home = () => {
    const {vehicle} = Data;
    return (
        <main>
            <div className='d-flex mt-15 card-wrap flex-wrap justify-content-center'>
                {
                    vehicle.map((ride)=><Card ride={ride}></Card>) 
                }
            </div>
            
        </main>
    );
};

export default Home;