import React from 'react';

const Buyer = ({ slr, idx }) => {
    const { name, email } = slr;
    console.log(slr);
    return (
        <tr>
            <th>{idx + 1}</th>
            <td>{name}</td>
            <td>Buyer</td>
            <td>{email}</td>
        </tr>
    );
};

export default Buyer;