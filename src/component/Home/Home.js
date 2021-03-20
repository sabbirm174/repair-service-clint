import React from 'react';
import Data from './../Data/Data';
import Card from './../Card/Card';
import Header from './../Header/Header';
import './home.css'
const Home = () => {
    const {vehicle} = Data;
    return (
        <main>
            <div className='d-flex card-wrap flex-wrap justify-content-center pt-5'>
                {
                    vehicle.map((ride)=><Card ride={ride}></Card>) 
                }
            </div>
            
        </main>
    );
};

export default Home;