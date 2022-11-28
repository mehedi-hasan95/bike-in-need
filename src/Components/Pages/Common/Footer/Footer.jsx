import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="py-6 bg-gray-800 text-gray-50 mt-5">
            <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
                <div className="grid grid-cols-12">
                    <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                        <Link to='/' rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
                            <span className="self-center text-2xl font-semibold">Bike In Need</span>
                        </Link>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium">Category</p>
                        <ul>
                            <li>
                                <Link rel="noopener noreferrer" to='/blog' className="hover:text-violet-400">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid justify-center pt-6 lg:justify-between">
                    <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                        <span>©2022 All rights reserved</span>
                        <Link rel="noopener noreferrer" href="#">
                            <span>Privacy policy</span>
                        </Link>
                        <Link rel="noopener noreferrer" href="#">
                            <span>Terms of service</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;