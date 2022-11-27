import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Lodding from '../../Common/Lodding/Lodding';
import SingleAdvertised from './SingleAdvertised';
import BookingModal from '../../Modal/BookingModal';

const Advertised = () => {
    const { data: advertised, isLoading, refetch } = useQuery({
        queryKey: ['advertised'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products/advertised');
            const data = await res.json();
            refetch()
            return data;
        }
    })

    const [treatment, setBookNow] = useState(null);

    if (isLoading) {
        return <Lodding></Lodding>
    }
    return (
        <div className='container mx-auto mt-16'>
            {
                advertised.length > 0 && <div>
                    <h2 className='text-center text-rose-500 font-semibold text-2xl'>This is Advertised Product</h2>
                    <div className="gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            advertised.map(ad => <SingleAdvertised setBookNow={setBookNow} key={ad._id} ad={ad}></SingleAdvertised>)
                        }
                    </div>
                    {
                        treatment && <BookingModal treatment={treatment} setBookNow={setBookNow}></BookingModal>
                    }
                </div>
            }
        </div>
    );
};

export default Advertised;