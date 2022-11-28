import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Lodding from '../../../Common/Lodding/Lodding';
import ConformationModal from '../../../Modal/ConformationModal';
import Buyer from './Buyer';

const Buyers = () => {
    const { data: buyers, isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`https://bike-in-need-server.vercel.app/users/buyer`);
            const data = await res.json();
            return data;
        }
    })

    // Delete a seller 

    const [deleteUser, setDeleteUser] = useState(null);
    const closeModal = () => {
        setDeleteUser(null);
    }
    const confirmDelete = buyer => {
        fetch(`https://bike-in-need-server.vercel.app/users/${buyer._id}`, {
            method: 'DELETE', // or 'PUT'
            headers: {
                authorization: `bearar ${localStorage.getItem('accessToken')}`
            }
        })

            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`You have sucessfully delete ${buyer.name}`);
                    refetch();
                }
            })
    }

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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        buyers.map((slr, idx) => <Buyer key={slr._id} setDeleteUser={setDeleteUser} slr={slr} idx={idx}></Buyer>)
                    }
                </tbody>
            </table>
            {/* Delete User  */}
            {
                deleteUser && <ConformationModal
                    title={'Do you want to delete the user?'}
                    message={`If you want to remove ${deleteUser.name}, please confirm Delete`}
                    successModal="Delete"
                    closeModal={closeModal}
                    userData={deleteUser}
                    confirmDelete={confirmDelete}
                ></ConformationModal>
            }
        </div>
    );
};

export default Buyers;