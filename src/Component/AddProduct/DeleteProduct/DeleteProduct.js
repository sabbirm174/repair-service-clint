import React,{useEffect,useState} from 'react';
import './deleteproduct.css'
import { Link } from 'react-router-dom';


const DeleteProduct = () => {
    const [allProduct,setAllProduct] = useState([])
    useEffect(()=>{
        
        fetch(`https://stormy-crag-38445.herokuapp.com/allProducts`)
        .then(res=>res.json())
        .then(data=> setAllProduct(data))
    },[])
    const DeleteProducts =(id)=>{
        console.log(id)
            fetch(`https://stormy-crag-38445.herokuapp.com/delete/${id}`,{
                method:'delete',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(data=>console.log(data))
            .catch(err=>console.log(err))
    }
    return (
        <div>
            <div class="sidenav d-flex align-items-center">
                <div>
                    <Link to="/manageProduct">Manage Product</Link>
                    <Link to="/addProduct">Add Product</Link>
                </div>
            </div>
            <div className="main">
            <table class="table table-dark table-striped">
                <tr className="text-center">
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Weigght</th>
                    <th scope="col">Action</th>
                </tr>
            {
                allProduct.map(data=> 
                    <tr className=" text-center">
                        <th scope="col">{data.name}</th>
                        <th scope="col">{data.price}</th>
                        <th scope="col">{data.weight}</th>
                        <th scope="col"><button onclick={()=>DeleteProducts(data._id)}>delete</button></th>
                    </tr>
                )
            }
            </table>
            </div>
        </div>
    );
};

export default DeleteProduct;