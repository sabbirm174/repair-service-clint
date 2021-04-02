import React,{useContext, useEffect,useState} from 'react';
import { MyContext } from './../../../App';
import OrderDetails from './../OrderDetails/OrderDetails';
import './checkout.css'


const CheckOut = () => {
    const [logedInUser, setLogedInUser] = useContext(MyContext)
    const [checkOutproduct,setChekOutProduct] = useState([])
    useEffect(()=>{
        setTimeout(() => {
            fetch(`https://stormy-crag-38445.herokuapp.com/loadProduct/?email=${logedInUser.email}`)
            .then(res=> res.json())
            .then(data=> setChekOutProduct(data))
        }, 100);
    },[])
    return (
        <div className='checkout-wrapper'>
            <table class="table table-dark table-striped">
            <tr className=" text-center">
        <th scope="col">Product Name</th>
        <th scope="col">Email</th>
        <th scope="col">Date</th>
        <th scope="col">Price</th>
      </tr>
            {
                checkOutproduct.map(data=> <OrderDetails key={data._id} data={data}/>)
            }
            </table>
        </div>
    );
};

export default CheckOut;