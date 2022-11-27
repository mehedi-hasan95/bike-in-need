import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Lodding from '../../../Common/Lodding/Lodding';
import ConformationModal from '../../../Modal/ConformationModal';
import SellerPdDetails from './SellerPdDetails';

const SellerProduct = () => {
    const { user } = useContext(AuthContext);

    const { data: sellerProducts, isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/seller/products?email=${user.email}`);
            const data = await res.json();
            return data;
        }
    })
    // Delete User
    const [deleteUser, setDeleteUser] = useState(null);
    const closeModal = () => {
        setDeleteUser(null);
    }

    const confirmDelete = seller => {
        fetch(`http://localhost:5000/seller/${seller._id}`, {
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

    // Delete User
    const [updateUser, setUpdateUser] = useState(null);
    const updateModal = () => {
        setUpdateUser(null);
    }

    const confirmUpdate = seller => {
        fetch(`http://localhost:5000/seller/${seller._id}`, {
            method: 'PATCH', // or 'PUT'
            headers: {
                authorization: `bearar ${localStorage.getItem('appointmentToken')}`
            }
        })

            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data);
                    toast.success(`You have sucessfully advatarised`);
                }
            })
    }

    
    if (isLoading) return <Lodding></Lodding>

    
    


    return (
        <div className='container mx-auto'>
            <h2 className='text-2xl mb-7'>{user?.displayName}, you have total {sellerProducts.length} products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 g-5'>
                {
                    sellerProducts?.map(dtls => <SellerPdDetails key={dtls._id} setUpdateUser={setUpdateUser} setDeleteUser={setDeleteUser} details={dtls} ></SellerPdDetails>)
                }
            </div>
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


            {/* Delete User  */}
            {
                updateUser && <ConformationModal
                    title={'Do you want to Update the user?'}
                    message={`If you want to Update ${updateUser.name}, please confirm`}
                    successModal="Update"
                    closeModal={updateModal}
                    userData={updateUser}
                    confirmDelete={confirmUpdate}
                ></ConformationModal>
            }

        </div>
    );
};

export default SellerProduct;