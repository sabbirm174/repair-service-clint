import axios from 'axios';
import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import Aside from '../Aside/Aside';



const Review = () => {
    const [serviceImg, setServiceImg] = useState(null)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
      const serviceInfo = {
          name: data.name,
          Designation: data.designation,
          description:data.description,
          serviceImg
      }
      axios.post('https://stormy-crag-38445.herokuapp.com/addreview',serviceInfo)
      .then(res=> res.json())
      .catch(err=> console.log(err))
      console.log(serviceInfo)
  };
    const handleImgChange = (e) =>{
        console.log(e.target.files[0])
        const imageData = new FormData();
        imageData.set('key','7c6f03aa9cc2ba06f69c15ec51a59852');
        imageData.append('image',e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',imageData)
        .then(res=> setServiceImg(res.data.data.url))
        .catch(err=>console.log(err))
    }
    return (

        <div className="container-fluid">
            <div className="row">
                    <Aside></Aside>
                    <div className="col-md-10">
                    <div className='d-flex h-100 align-items-center justify-content-center'>
                    <div className='form-wrapper'>
                        <h3>Add Your Opinion</h3>
                    <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Your Name</label><br/>
                        <input name="name" required ref={register} />
                    </div> 
                    
                    <div className="form-group">
                        <label for="exampleInputEmail1">Your Designation</label><br/>
                        <input name="designation"  required ref={register} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">What you Want To Say</label><br/>
                        <input name="description"  required ref={register} />
                    </div>
                    <div className="form-group">
                    <label for="exampleInputEmail1">Add Your Image Here</label>
                        <input type='file' onChange={handleImgChange} required  />
                    </div>
                    <input className='btn btn-primary' type="submit" />       
                    </form>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Review;