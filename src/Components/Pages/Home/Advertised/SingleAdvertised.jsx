import React from 'react';

const SingleAdvertised = ({ ad, setBookNow }) => {
    const {img, sale, title} = ad;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-10">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h3 className='text-xl'><span className='font-semibold'>Sold Price:</span> {sale}</h3>
                <div className="card-actions justify-end">
                <label onClick={() => setBookNow(ad)} htmlFor="open-modal" className="btn btn-primary">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default SingleAdvertised;