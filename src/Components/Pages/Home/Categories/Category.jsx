import React from 'react';
import Modal from '../../Modal/Modal';

const Category = () => {
    return (
        // location, resale price, original price, years of use, the time when it got posted, the seller's name; if the seller is verified, there will be a blue tick next to their name and a Book now button.
        <div className='grid grid-cols-3'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className="card-actions justify-between">
                        <div className="text-lg">Sale: 120000</div>
                        <div className="text-lg">Original Price: 320000</div>
                    </div>
                    <div className="card-actions justify-between">
                        <h2>Location: Jashore</h2>
                        <h4>Years of Use: 2 Years</h4>
                        <h4>Posted: 24-Nov-22</h4>
                    </div>
                    <h2>Seller: Mehedi</h2>
                    <label htmlFor="open-modal" className='btn btn-primary'>Buy Now</label>
                </div>
            </div>
            <Modal></Modal>
        </div>
    );
};

export default Category;