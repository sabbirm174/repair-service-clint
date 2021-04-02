import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './addproduct.css'
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const [imageURL, setImageURL] = useState(null)
  const { register, handleSubmit, watch, errors } = useForm();
  
  const onSubmit = data => {
    const name = data.name;
    const price = data.price;
    const weight = data.weight;
    const imageUrl =imageURL;
    const allData ={name,price,weight,imageUrl}
    console.log(allData)
    
    fetch('https://stormy-crag-38445.herokuapp.com/addEvent',{
      method:"post",
      headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify(allData),

    })
    .then(res => console.log("res",res))
  };

  //image upload
    const handleImageUpload = (e)=>{
        const imageData = new FormData();
        imageData.set('key','7c6f03aa9cc2ba06f69c15ec51a59852');
        imageData.append('image',e.target.files[0])
        console.log(imageData)
        axios.post('https://api.imgbb.com/1/upload', 
        imageData
        )
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    return (
        <div>
          <div class="sidenav d-flex align-items-center">
                <div>
                    <Link to="/manageProduct">Manage Product</Link>
                    <Link to="/addProduct">Add Product</Link>
                </div>
            </div>
          <div className='d-flex form-wrapper align-items-center justify-content-center'>
             <form onSubmit={handleSubmit(onSubmit)}>
               <span>Product name: </span>
                <input name="name" defaultValue="product Name" ref={register} /><br/>
                <span>Price: </span>
                <input name="price" defaultValue="" ref={register} /><br/>
                <span>Weight: </span>
                <input name="weight" defaultValue="" ref={register} /><br/>
                <span>Upload Image: </span>
                <input name="exampleRequired" type="file" onChange={handleImageUpload} /><br/>
                <input className='btn btn-primary' type="submit" />
            </form>
        </div>
        </div>
    );
};

export default AddProduct;