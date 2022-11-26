import React from 'react';

const AddProduct = () => {
    return (
        <div className='container mx-auto'>
            <div>
            <form className="space-y-12 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4">
                    <div>
                        <label className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label for="password" className="text-sm">Password</label>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign in</button>
                    </div>
                </div>
            </form>
        </div>
        </div >
    );
};

export default AddProduct;