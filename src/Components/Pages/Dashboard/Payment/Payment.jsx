import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const payment = useLoaderData();
    const { service, sale } = payment;


    
    return (
        <div>
            <h2 className='text-2xl'>Your are payment for: <span className='font-semibold text-rose-300'>{service}</span></h2>
            <h3 className="text-xl py-4"><span className='font-semibold'>Payment: </span>{sale}</h3>
            <div className='w-96 border p-5'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm payment={payment} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;