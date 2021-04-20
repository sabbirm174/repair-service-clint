import React,{useState,useContext,useEffect} from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import StripeCartPayment from './../StripeCardPayment/StripeCartPayment';
import { MyContext } from './../../../App';
import './booknow.css'



const BookNow = ({service}) => {
   
    const [loggedInUsser,setLoggedInUser] = useContext(MyContext)
    const { register, handleSubmit, watch, errors } = useForm();
    const [infoData, setInfoData] = useState(null)
    const onSubmit = data => {
        setInfoData(data)
    };
    console.log('service',service && service.name && service)
    const handlePaymentSuccess =(paymentId)=>{
        const eventData ={
            name: infoData.name,
            email: loggedInUsser.email,
            service,
            status: 'pending',
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
        <div className='d-flex h-100 align-items-center justify-content-center'>
            <div className='form-wrapper'>
                <h3>Book Now</h3>
                <h5>Service: {service || 'Please Go To Home Page And Select A Service'}</h5>
                <form style={{display: infoData? 'none':'block'}} onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                    <label >Your Name</label>
                    <input className='form-control' name="name" required ref={register} />
                    </div>
                    
                    {errors.exampleRequired && <span>This field is required</span>}
                    {service && <input type="submit" /> || <p>Please select a valied service</p>}
                    
                </form>
                <div style={{display: infoData? 'block':'none'}}>
                    <StripeCartPayment handlePaymentSuccess={handlePaymentSuccess}></StripeCartPayment>
                </div>
            </div>

        </div>
    );
};

export default BookNow;