import React,{useContext, useEffect,useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import './singleProduct.css'
import CheckOut from './../CheckOut/CheckOut';
import { MyContext } from './../../../App';

const SingleProduct = () => {
    const [data, setData] = useState([]);
    const[logedInUser,setLogedInUser] = useContext(MyContext)
    useEffect(()=>{
        fetch("https://stormy-crag-38445.herokuapp.com/allProducts")
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    let {id} = useParams();
    const product = data.find(pd=> pd._id === id);
    const quantity = [product].length;

    const handleCheckOut =()=>{
        const today = new Date();
        // const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const date = today.toLocaleString('en-US');
        const {name,price,weight,imgUrl} = product;
        const singleProduct = {name,price,weight,imgUrl}
        const orderDetail = {...logedInUser,...singleProduct,date}
        fetch('https://stormy-crag-38445.herokuapp.com/addProduct',{
            method: "post",
            body: JSON.stringify(orderDetail),
            headers: {'Content-Type': 'application/json'}
        })
    }
    return (
        <div className="p-4">
            <div className="table-wrapper">
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{product? product.name : ""}</td>
                        <td>{quantity}</td>
                        <td>{product? product.price : ""}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="checkout-wrapper p-5">
                <Link onClick={handleCheckOut} to='/checkOut' className='btn btn-primary float-right' >CheckOut</Link>
            </div>
        </div>
    );
};

export default SingleProduct;