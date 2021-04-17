import React,{useState} from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const MyCheckoutForm = ({handlePaymentSuccess}) => {
    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
        setPaymentError(error.message)
        setPaymentSuccess(null)
      console.log('[error]', error);
    } else {
        setPaymentSuccess(paymentMethod.id)
        setPaymentError(null)
        handlePaymentSuccess(paymentMethod.id)
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {
          paymentError && <p style={{color:'red'}}>{paymentError}</p>
        }
      {
          paymentSuccess && <p style={{color:'green'}}>payment successfull</p>
        }
    </form>
    
  );
};

export default MyCheckoutForm ;