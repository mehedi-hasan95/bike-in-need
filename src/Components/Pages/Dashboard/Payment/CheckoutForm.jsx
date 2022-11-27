import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ payment }) => {

    const { sale, name, email, phone } = payment;

    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("");
    const [transictionId, setTransictionId] = useState("");
    const [processing, setProcessing] = useState(false);

    const stripe = useStripe();
    const elements = useElements();


    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sale }),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret)
            });
    }, [sale]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
        } else {
            setCardError('')
        }

        setSuccess('')
        setProcessing(true)
        const {paymentIntent, confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name, email, phone
                },
              },
            },
          );
          if(confirmError) {
            setCardError(confirmError.message);
            return;
          }
          if (paymentIntent.status === "succeeded") {
            setSuccess(`Congrats! ${name} for purchase`);
            setTransictionId(paymentIntent.id)
        }
        setProcessing(false) 

    };
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-primary btn-sm mt-5' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
            {cardError && <p className='text-red-500'>{cardError}</p>}
            {
                success && <div className='mt-4'>
                    <p className='text-green-500'>{success}</p>
                    <p>Transiction Id is: <span className='font-bold'>{transictionId}</span></p>
                </div>
            }
        </form>
    );
};

export default CheckoutForm;