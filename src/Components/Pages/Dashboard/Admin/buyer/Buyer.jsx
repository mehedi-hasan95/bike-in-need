import React from 'react';

const Buyer = ({ slr, idx, setDeleteUser }) => {
    const { name, email } = slr;
    return (
        <tr>
            <th>{idx + 1}</th>
            <td>{name}</td>
            <td>Buyer</td>
            <td>{email}</td>
            <td>
            <label onClick={() => setDeleteUser(slr)} htmlFor="conform-modal" className='btn btn-primary'>Delete</label>
            </td>
        </tr>
    );
};

export default Buyer;