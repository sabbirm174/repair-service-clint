import React,{useEffect} from 'react';
import { useState } from 'react';
import ManageServiceCard from './ManageServiceCard';
import Aside from './../Aside/Aside';

const ManageService = () => {
    const [manageData, setManageData] = useState([])
    useEffect(()=>{
        fetch('https://stormy-crag-38445.herokuapp.com/allservice')
        .then(res=>res.json())
        .then(data => {
            setManageData(data)
            console.log(manageData)
        });
    },[])
    return (
            <div className="container-fluid">
                <div className="row">
                    <Aside></Aside>
                    <div className="col-md-10">
                        {
                            manageData.map(data => <ManageServiceCard deletingservice={data} key={data._id}></ManageServiceCard>)
                        }
                    </div>
                </div>
            </div>
    );
};

export default ManageService;