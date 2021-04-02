import { library } from '@fortawesome/fontawesome-svg-core';
import React,{useEffect, useState} from 'react';
import Cards from '../Card/Cards';
import './home.css'

const Home = () => {
    const [datas, setData] = useState([]);
    console.log(datas)
    useEffect(() => {
        fetch('https://stormy-crag-38445.herokuapp.com/allProducts')
        .then(res=> res.json())
        .then(data=> setData(data))
    },[])
    return (
        <div>
            <div className=' main-wrapper d-flex flex-wrap justify-content-center'>
                {
                    datas.length === 0 && <div class="spinner-border" role="status"><span class="sr-only">Loading...</span>
                  </div>
                }
            {
                datas.map((data)=> <Cards key={data._id} allData={data}/>)
            }
            </div>
        </div>
    );
};

export default Home;