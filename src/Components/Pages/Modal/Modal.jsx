import React from 'react';

const Modal = () => {
    return (
        <div>
            <input type="checkbox" id="open-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="open-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <form className='grid grid-cols-1 gap-5 mt-7'>

                        <input type="text" name='date' className="input input-bordered w-full" />
                        
                        <input type="text" name='name' disabled placeholder="Full Name" className="input input-bordered w-full" />
                        <input type="tel" name="phone" placeholder='Your Phone' className="input input-bordered w-full" required />
                        <input type="email" name="email" disabled placeholder='Your Email' className="input input-bordered w-full" required />
                        <p><span className='font-bold'>Price: </span>50</p>
                        <input type="submit" className='bg-slate-600 py-3 cursor-pointer rounded-lg text-white font-semibold' value="Submit" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;