import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../../Modal/BookingModal';
import CategoryDetails from './CategoryDetails';

const SingleCategory = () => {
    const singleCategoryBike = useLoaderData();
    const [treatment, setBookNow] = useState(null);


    return (
        <div className='container mx-auto'>
            <h2>Bikes under: {singleCategoryBike[0].category}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    singleCategoryBike.map(details => <CategoryDetails key={details._id} setBookNow={setBookNow} details={details}></CategoryDetails>)
                }
            </div>
            {
                treatment && <BookingModal treatment={treatment} setBookNow={setBookNow}></BookingModal>
            }
        </div>
    );
};

export default SingleCategory;