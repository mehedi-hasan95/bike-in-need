import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const BookingModal = ({ treatment, setBookNow,   }) => {
    const {user} = useContext(AuthContext);
    const { title, sale, _id, img } = treatment;
    console.log(treatment);


    const handleModal = event => {
        event.preventDefault();
        const form = event.target;
        const phone = form.phone.value;
        const email = form.email.value;


        const booking = {
            service: title,
            seller: treatment.name,
            phone, email,
            sale,
            img,
            service_id : _id,
        }
        console.log(booking);


        fetch('http://localhost:5000/purchase', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then((response) => response.json())
            .then((data) => {
                
                if(data.acknowledged) {
                    toast.success("You have successfully book your this product");
                    setBookNow(null);
                }
                else {
                    setBookNow(null);
                    toast.error(data.message)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });


        
    }

    return (
        <>
            <input type="checkbox" id="open-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="open-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <form onSubmit={handleModal} className='grid grid-cols-1 gap-5 mt-7'>  
                        <input type="text" name='name' defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered w-full" />
                        <input type="tel" name="phone" placeholder='Your Phone' className="input input-bordered w-full" required />
                        <input type="email" name="email" defaultValue={user?.email} disabled placeholder='Your Email' className="input input-bordered w-full" required />
                        <p><span className='font-bold'>Price</span> ${sale}</p>
                        <input type="submit" className='bg-slate-600 py-3 cursor-pointer rounded-lg text-white font-semibold' value="Submit" />

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;