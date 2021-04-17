import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import MyCheckoutForm from './../MyCheckoutForm/MyCheckoutForm';

const stripePromise = loadStripe('pk_test_51IgZuhFjdThr93Zc95K5QeHI44Fsp2dx96kf3xGG4FiPtTI4g2NLynQ2OCiY5SGdMinFTUnADy1NhdGTirqOcurI00JI05T1qq');
const StripeCartPayment = ({handlePaymentSuccess}) => {
    return (
        <Elements stripe={stripePromise}>
            <MyCheckoutForm handlePaymentSuccess={handlePaymentSuccess}></MyCheckoutForm>
        </Elements>
    );
};

export default StripeCartPayment;