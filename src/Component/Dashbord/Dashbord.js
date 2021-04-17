import React,{useEffect,useState} from 'react';
import Aside from './Aside/Aside';
import DashbordContent from './DashbordContent/DashbordContent';
import Admin from './Admin/Admin';
import AddServices from './AddServices/Addservices';
import BookNow from './BookNow/BookNow';
import { useParams } from 'react-router-dom';

const Dashbord = () => {
    const [singleService, setSingleService] = useState([])
    useEffect(()=>{
        fetch('http://localhost:2000/allservice')
        .then(res=>res.json())
        .then(data=> {
            setSingleService(data)
        })

    },[])

    let {id} = useParams();
    const service = singleService.find(srvc=> srvc._id === id);
    console.log(service)
    return (
        <div className='row'>
            <Aside></Aside>
            <AddServices/>
        </div>
    );
};

export default Dashbord;