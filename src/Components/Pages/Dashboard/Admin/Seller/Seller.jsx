import React from 'react';

const Seller = ({ slr, idx, setConfrimModal, setDeleteUser }) => {
    const { name, email } = slr;
    
    return (
        <tr>
            <th>{idx + 1}</th>
            <td>{name}</td>
            <td>Seller</td>
            <td>{email}</td>
            <td>
                {
                    !slr.verified && <label onClick={() => setConfrimModal(slr)} htmlFor="confirm-modal" className='btn btn-primary btn-sm'>Unverified</label>
                }
                {
                    slr.verified && <button className=' bg-secondery-50 px-3 py-1 rounded-md font-semibold' disabled>Verified</button>
                }
            </td>
            <td><label onClick={() => setDeleteUser(slr)} htmlFor="conform-modal" className='btn btn-primary'>Delete</label></td>
        </tr>
    );
};

export default Seller;