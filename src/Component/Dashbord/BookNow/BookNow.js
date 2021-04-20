import React,{useState,useContext,useEffect} from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import StripeCartPayment from './../StripeCardPayment/StripeCartPayment';
import { MyContext } from './../../../App';
const BookNow = ({service}) => {
   
     
    const { register, handleSubmit, watch, errors } = useForm();
    const [infoData, setInfoData] = useState(null)
    const onSubmit = data => {
        setInfoData(data)
    };
    console.log(service && service.name && service)
    const handlePaymentSuccess =(paymentId)=>{
        const eventData ={
            name: infoData.name,
            email: infoData.email,
            service,
            paymentId
        }
        fetch('https://stormy-crag-38445.herokuapp.com/addbook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventData),
        })
        console.log('df',eventData)
    }
    return (
        <div>
        <h5>service: {service && service.name || 'Please go to home page and select a service'}</h5>
            <form style={{display: infoData? 'none':'block'}} onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                <label >Name</label>
                <input className='form-control' name="name" required ref={register} />
                </div>
                <div className="form-group">
                <label >Email</label>
                <input className='form-control' name="email" required ref={register} />
                </div>
                
                {errors.exampleRequired && <span>This field is required</span>}
                {service && <input type="submit" /> || <p>Please select a valied service</p>}
                
            </form>
            <div style={{display: infoData? 'block':'none'}}>
                <StripeCartPayment handlePaymentSuccess={handlePaymentSuccess}></StripeCartPayment>
            </div>
            
        </div>
    );
};

export default BookNow;