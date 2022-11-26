import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import SellerPdDetails from './SellerPdDetails';

const SellerProduct = () => {
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
                    sellerProducts?.map(dtls => <SellerPdDetails key={dtls._id} details={dtls} ></SellerPdDetails>)
                }
            </div>
        </div>
    );
};

export default SellerProduct;