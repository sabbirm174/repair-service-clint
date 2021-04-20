import axios from 'axios';
import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import Aside from '../Aside/Aside';
const Admin = () => {
    const [adminImg, setAdminImg] = useState(null)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
      const adminInfo = {
          name: data.name,
          email:data.email,
          adminImg
      }
      axios.post('https://stormy-crag-38445.herokuapp.com/addadmin',adminInfo)
      .then(res=> res.json())
      .catch(err=> console.log(err))
      console.log(adminInfo)
  };
    const handleImgChange = (e) =>{
        console.log(e.target.files[0])
        const imageData = new FormData();
        imageData.set('key','7c6f03aa9cc2ba06f69c15ec51a59852');
        imageData.append('image',e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',imageData)
        .then(res=> setAdminImg(res.data.data.url))
        .catch(err=>console.log(err))
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <Aside></Aside>
                <div className="col-md-10">
                    <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" required ref={register} />
                <input name="email" type='email' required ref={register} />
                <input type='file' onChange={handleImgChange} required  />
                <input type="submit" />
            </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;