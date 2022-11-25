import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Lodding from '../../../Common/Lodding/Lodding';
import ConfirmModal from '../../../Modal/ConfirmModal';
import Seller from './Seller';

const Sellers = () => {
    const [confirmModal, setConfrimModal] = useState(null);
    const { data: sellers, isLoading } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/seller`);
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
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.map((slr, idx) => <Seller key={slr._id} setConfrimModal={setConfrimModal} slr={slr} idx={idx}></Seller>)
                    }
                </tbody>
                {
                    confirmModal && <ConfirmModal
                    hedding={`Do You want to Verified ${confirmModal.name}`}
                    email = {confirmModal.email}
                    sucessBtn = {`Yes`}
                    denyBtn = {`Cancle`}
                    ></ConfirmModal>
                }
            </table>
        </div>
    );
};

export default Sellers;