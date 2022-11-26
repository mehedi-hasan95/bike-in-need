import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';
import Lodding from '../../Common/Lodding/Lodding';

const Categories = () => {
    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categories`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('appointmentToken')}`
                },
            });
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Lodding></Lodding>
    }
    return (
        <div className='container mx-auto'>
            <h2 className='text-center text-3xl font-bold mb-10'>All Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                categories?.map(cat => <Category key={cat._id} cat={cat}></Category>)
            }
            </div>
        </div>
    );
};

export default Categories;