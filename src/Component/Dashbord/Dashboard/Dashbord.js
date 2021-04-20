import React,{useEffect,useState,useContext} from 'react';
import Aside from '../Aside/Aside';
import DashbordContent from '../DashbordContent/DashbordContent';
import Admin from '../Admin/Admin';

import BookNow from '../BookNow/BookNow';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../../App';
import AddServices from './../AddServices/Addservices';

const Dashbord = () => {
    const [singleServiceBooking, setSingleServiceBooking] = useContext(MyContext);
    const [singleService, setSingleService] = useState([])
    useEffect(()=>{
        fetch('https://stormy-crag-38445.herokuapp.com/allservice')
        .then(res=>res.json())
        .then(data=> {
            setSingleService(data)
            
        })

    },[])

    let {id} = useParams();
    const service = singleService.find(se=> se._id === id)
    
    return (
        <div className="container-fluid">
            <div className='row'>
                <Aside ></Aside>
                <div className="col-md-10">
                    <BookNow service={service}></BookNow>
                </div>
            </div>
        </div>
    );
};

export default Dashbord;