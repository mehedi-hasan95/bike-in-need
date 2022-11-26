import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import ConformationModal from '../../../Modal/ConformationModal';
import SellerPdDetails from './SellerPdDetails';

const SellerProduct = () => {

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
                }
            })
    }



    const {user} = useContext(AuthContext);
    const [sellerProducts, setSellerProducts] = useState([]);
    useEffect( () => {
        async function products() {
            const allProduct = await axios.get(`http://localhost:5000/seller/products?email=${user.email}`)
            setSellerProducts(allProduct.data)
        }
        products()
    },[user.email])


    return (
        <div className='container mx-auto'>
            <h2 className='text-2xl mb-7'>{user?.displayName}, you have total {sellerProducts.length} products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 g-5'>
                {
                    sellerProducts?.map(dtls => <SellerPdDetails key={dtls._id} setDeleteUser={setDeleteUser} details={dtls} ></SellerPdDetails>)
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

            
        </div>
    );
};

export default SellerProduct;