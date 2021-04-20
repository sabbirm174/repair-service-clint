import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from './../../../App';

const ServiceCard = ({item}) => {
    const [singleId,setSingleId] = useContext(MyContext)
    const handleClick=(id)=>{
        const singleid = {
            id
        }
        setSingleId(singleid)
        console.log(singleid)

    }

    return (
        <div className='col-md-3 text-center'>
            <div class="card" >
            <img class="card-img-top" src={item.serviceImg} alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{item.description}</p>
                <button className='btn btn-primary' onClick={()=>handleClick(item._id)}><Link to={`/dashboard/${item._id}`}>Select Service</Link></button>
            </div>
            </div>
            {/* <img className='img-fluid' src={item.serviceImg} alt=""/>
            <h4></h4>
            <h5></h5>
            {/* <button > <Link to='/login'>click</Link> </button> */}
           
            {/* <button onClick={()=>handleClick(item._id)}><Link to={`/dashboard/${item._id}`}>click me</Link></button> */}
        </div>
    );
};

export default ServiceCard;