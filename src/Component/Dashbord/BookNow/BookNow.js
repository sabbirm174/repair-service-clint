import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import StripeCartPayment from './../StripeCardPayment/StripeCartPayment';
const BookNow = () => {
    //const [allData, setAllData] = useState()
    const { register, handleSubmit, watch, errors } = useForm();
    const [infoData, setInfoData] = useState(null)
    const onSubmit = data => {
        setInfoData(data)
    };
    
    const handlePaymentSuccess =(paymentId)=>{
        const eventData ={
            name: infoData.name,
            email: infoData.email,
            paymentId,
            service: infoData.service
        }
        fetch('http://localhost:2000/addbook', {
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
            <form style={{display: infoData? 'none':'block'}} onSubmit={handleSubmit(onSubmit)}>
                <input name="name" required ref={register} />
                <input name="email" required ref={register} />
                <input name="service" required ref={register} />
                
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" />
            </form>
            <div style={{display: infoData? 'block':'none'}}>
                <StripeCartPayment handlePaymentSuccess={handlePaymentSuccess}></StripeCartPayment>
            </div>
            
        </div>
    );
};

export default BookNow;