import React from 'react';

const PurchaseItem = ({ product }) => {
    const {img, service, sale} = product;
    console.log(product);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt={service} /></figure>
            <div className="card-body">
                <h2 className="card-title">{service}</h2>
                <p>Price: {sale}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PurchaseItem;