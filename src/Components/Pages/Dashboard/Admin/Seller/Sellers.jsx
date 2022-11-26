import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Lodding from '../../../Common/Lodding/Lodding';
import ConfirmModal from '../../../Modal/ConfirmModal';
import ConformationModal from '../../../Modal/ConformationModal';
import Seller from './Seller';

const Sellers = () => {
    const [confirmModal, setConfrimModal] = useState(null);
    const { data: sellers, isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/seller`);
            const data = await res.json();
            return data;
        }
    })


    const [deleteUser, setDeleteUser] = useState(null);
    const closeModal = () => {
        setDeleteUser(null);
    }
    const confirmDelete = seller => {
        fetch(`http://localhost:5000/users/${seller._id}`, {
            method: 'DELETE', // or 'PUT'
            headers: {
                authorization: `bearar ${localStorage.getItem('appointmentToken')}`
            }
        })

            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`You have sucessfully delete ${seller.name}`);
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
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.map((slr, idx) => <Seller key={slr._id} setDeleteUser={setDeleteUser} setConfrimModal={setConfrimModal} slr={slr} idx={idx}></Seller>)
                    }
                </tbody>
                {
                    confirmModal && <ConfirmModal
                        hedding={`Do You want to Verified ${confirmModal.name}`}
                        email={confirmModal.email}
                        sucessBtn={`Yes`}
                        denyBtn={`Cancle`}
                    ></ConfirmModal>
                }
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

export default Sellers;