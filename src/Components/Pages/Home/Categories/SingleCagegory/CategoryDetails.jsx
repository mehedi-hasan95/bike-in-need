import React from 'react';
import { Link } from 'react-router-dom';

const CategoryDetails = ({ details }) => {
    const { buy, date, desc, img, location, name, sale, used, title } = details;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2>Seller Name: {name}</h2>
                <h2 className="card-title">
                    {title}
                </h2>
                <h3 className='text-lg'>Days Used: {used}</h3>
                <h3 className='text-lg'>Buy Price: {buy}</h3>
                <h3 className='text-lg'>Sald Price: {sale}</h3>
                <h3 className='text-lg'>Seller Location: {location}</h3>
                <h3 className='text-lg'>Published Date: {date}</h3>
            </div>
            <Link className='text-xl btn btn-primary'>Book Now</Link>
        </div>
    );
};

export default CategoryDetails;