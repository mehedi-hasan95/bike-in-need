import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetails from './CategoryDetails';
import Modal from '../../../Modal/Modal';

const SingleCategory = () => {
    const [booking, setBooking] = useState(null);
    const singleCategoryBike = useLoaderData();
    return (
        <div className='container mx-auto'>
            <h2>Bikes under: {singleCategoryBike[0].category}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    singleCategoryBike.map(details => <CategoryDetails key={details._id} details={details} setBooking={setBooking}></CategoryDetails>)
                }
            </div>
            {
                booking && <Modal booking={booking} setBooking={setBooking}></Modal>
            }
        </div>
    );
};

export default SingleCategory;