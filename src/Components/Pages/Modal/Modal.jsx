import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Modal = ({booking, setBooking}) => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <input type="checkbox" id="open-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="open-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{booking.title}</h3>
                    <form className='grid grid-cols-1 gap-5 mt-7'>
                        
                        <input type="text" name='name' defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered w-full" />
                        <input type="email" name="email" defaultValue={user?.email} disabled placeholder='Your Email' className="input input-bordered w-full" required />
                        <input type="tel" name="phone" placeholder='Your Phone' className="input input-bordered w-full" required />
                        <input type="text" name="location" placeholder='Where you want to meet?' className='input input-bordered w-full' />
                        <p><span className='font-bold'>Price: </span>{booking.sale}</p>
                        <input type="submit" className='bg-slate-600 py-3 cursor-pointer rounded-lg text-white font-semibold' value="Submit" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;