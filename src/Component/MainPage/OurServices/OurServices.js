import React,{useState,useEffect} from 'react';
import icon1 from '../../../icon/Internet.png'
import ServiceCard from './ServiceCard';
const OurServices = () => {
    const [servicesinfo,setServicesInfo] = useState([])
    useEffect(()=>{
        fetch('https://stormy-crag-38445.herokuapp.com/allservice')
        .then(res=>res.json())
        .then(data => {
            setServicesInfo(data)
            console.log(servicesinfo)
        });
    },[])
    return (
        <div>
            <section className='container'>
                <div className="row justify-content-center">
                    {
                        servicesinfo.map(item=> <ServiceCard key={item._id} item={item}></ServiceCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default OurServices;