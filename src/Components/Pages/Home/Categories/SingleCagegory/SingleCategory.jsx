import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetails from './CategoryDetails';

const SingleCategory = () => {
    const singleCategoryBike = useLoaderData();
    console.log(singleCategoryBike[0].category);
    return (
        <div className='container mx-auto'>
            <h2>Bikes under: {singleCategoryBike[0].category}</h2>
            <div>
                {
                    singleCategoryBike.map(details => <CategoryDetails key={details._id} details={details}></CategoryDetails>)
                }
            </div>
        </div>
    );
};

export default SingleCategory;