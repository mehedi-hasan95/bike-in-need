import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Lodding from '../../../Common/Lodding/Lodding';
import Buyer from './Buyer';

const Buyers = () => {
    const { data: buyers, isLoading } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/buyer`);
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Lodding></Lodding>
    }
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        buyers.map((slr, idx) => <Buyer key={slr._id} slr={slr} idx={idx}></Buyer>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Buyers;