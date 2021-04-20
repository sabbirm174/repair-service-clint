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
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">title</th>
                            <th scope="col">Id</th>
                            <th scope="col">Status</th>
                            </tr>
                        </thead>
                        {
                            manageData.map(data => <ManageServiceCard deletingservice={data} key={data._id}></ManageServiceCard>)
                        }
                        </table>
                    </div>
                </div>
            </div>
    );
};

export default ManageService;