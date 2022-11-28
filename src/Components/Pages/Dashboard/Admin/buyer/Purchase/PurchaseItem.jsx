import React from 'react';
import { Link } from 'react-router-dom';

const PurchaseItem = ({ product }) => {
    const {img, service, sale, _id} = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt={service} /></figure>
            <div className="card-body">
                <h2 className="card-title">{service}</h2>
                <p>Price: {sale}</p>
                <div className="card-actions justify-end">
                    <Link to={`/dashboard/purchase/${_id}`} className="btn btn-primary">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default PurchaseItem;