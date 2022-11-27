import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../AuthProvider/AuthProvider';
import PurchaseItem from './PurchaseItem';

const Purchase = () => {
    const {user} = useContext(AuthContext);
    const [purchaseProducts, setPurchaseProducts] = useState([]);
    useEffect(() => {
        async function products() {
            const allProduct = await axios.get(`http://localhost:5000/purchase?email=${user.email}`)
            setPurchaseProducts(allProduct.data)
        }
        products()
    }, [user.email])
    return (
        <div>
            <h2 className='text-2xl mb-5'>Total Product: {purchaseProducts.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    purchaseProducts.map(product => <PurchaseItem key={product._id} product={product}></PurchaseItem>)
                }
            </div>
        </div>
    );
};

export default Purchase;