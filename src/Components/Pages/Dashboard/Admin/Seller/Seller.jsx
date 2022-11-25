import React from 'react';
import { Link } from 'react-router-dom';

const Seller = ({ slr, idx }) => {
    const { name, email } = slr;
    console.log(slr);
    return (
        <tr>
            <th>{idx + 1}</th>
            <td>{name}</td>
            <td>Seller</td>
            <td>{email}</td>
            <td>
                {
                    !slr.verified && <Link><button className='btn btn-primary btn-sm'>Unverified</button></Link>
                }
                {
                    slr.verified && <button className=' bg-secondery-50 px-3 py-1 rounded-md font-semibold' disabled>Verified</button>
                }
            </td>
        </tr>
    );
};

export default Seller;