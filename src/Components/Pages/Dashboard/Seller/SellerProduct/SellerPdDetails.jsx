import React from 'react';

const SellerPdDetails = ({details}) => {
    const { buy, date, img, location, name, sale, used, title, parcech } = details;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Seller Name: {name}
                    {
                        details.verified && <div className="badge badge-secondary">Verified</div>
                    }
                </h2>
                <h2 className="card-title">
                    {title}
                </h2>
                <h3 className='text-lg'>Days Used: {used}</h3>
                <h3 className='text-lg'>Buy Price: {buy}</h3>
                <h3 className='text-lg'>Sald Price: {sale}</h3>
                <h3 className='text-lg'>Seller Location: {location}</h3>
                <h3 className='text-lg'>Published Date: {date}</h3>
                <h3 className='text-lg'>Purchase Year: {parcech}</h3>
            </div>
            
        </div>
    );
};

export default SellerPdDetails;