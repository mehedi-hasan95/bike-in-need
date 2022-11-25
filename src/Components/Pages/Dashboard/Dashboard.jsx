import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useSeller from '../../Hooks/UseSeller';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user.email);
    const [isSeller] = useSeller(user.email);
    return (
        <div className="drawer drawer-mobile container mx-auto">
            {/* <input id="my-drawer-2" type="checkbox" className="drawer-toggle" /> */}
            
            <Outlet></Outlet>
            <div className="drawer-side">
                {/* <label htmlFor="my-drawer-2" className="drawer-overlay"></label> */}
                <ul className="menu p-4 w-80 text-base-content">
                    {isAdmin && <>
                        <li><Link>All Sellers</Link></li>
                        <li><Link>All Buyers</Link></li>
                    </>
                    }

                    {/* For Seller  */}
                    {
                        isSeller && <>
                            <li><Link>Add A product</Link></li>
                            <li><Link>My Products</Link></li>
                        </>
                    }
                    {/* For Buyers */}
                    {
                        !isAdmin && !isSeller && <>
                            <li><Link>My orders</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;