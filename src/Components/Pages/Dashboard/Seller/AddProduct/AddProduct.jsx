import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const AddProduct = () => {
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    
    const navigate = useNavigate();
    const uploadImage = process.env.REACT_APP_image_host;


    const onSubmit = data => {
        const img = data.img[0];
        console.log(img);
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${uploadImage}`;
        console.log(url);
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const products = {
                        title: data.title,
                        category: data.category,
                        buy: data.buy,
                        sale:data.sale,
                        condition: data.condition,
                        parcech: data.date,
                        location: data.location,
                        number: data.number,
                        used: data.used,
                        desc: data.desc,
                        date,
                        seller: user.email,
                        img: imgData.data.url
                    }
                    fetch('http://localhost:5000/products/add', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('appointmentToken')}`
                        },
                        body: JSON.stringify(products),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            if(data.acknowledged) {
                                toast.success('You have sucessfully add your product');
                                navigate('/');
                            }
                        })
                }
            })
    }


    
    return (
        <div className='container mx-auto'>

            <section className="p-6 bg-gray-800 text-gray-50">
                <form onSubmit={handleSubmit(onSubmit)} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label className="block">Product Name</label>
                                <input {...register("title", { required: "Product name is Required", })} type="name" name="title" placeholder="Product Name" className="w-full px-4 py-3 rounded-md text-black" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="block">Mobile Number</label>
                                <input {...register("number", { required: "Number is Required" })} type="text" name="number" placeholder="Mobile Number" className="w-full px-4 py-3 rounded-md text-black" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="label">
                                    <span className="label-text text-white">Choose your Category</span>
                                </label>
                                <select {...register("category")} name='category' className="select select-bordered text-black w-full">
                                    <option>80cc</option>
                                    <option>100cc</option>
                                    <option>150cc</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="label">
                                    <span className="label-text text-white">Product Condition</span>
                                </label>
                                <select {...register("condition")} name='condition' className="select select-bordered text-black w-full">
                                    <option>Excellent</option>
                                    <option>Good</option>
                                    <option>Fair</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className="block">Sale Price</label>
                                <input {...register("sale", { required: "Sale Price is Required", })} type="name" name="sale" placeholder="Sale Price" className="w-full px-4 py-3 rounded-md text-black" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className="block">Sale Price</label>
                                <input {...register("buy", { required: "Sale Price is Required", })} type="name" name="buy" placeholder="Original Price" className="w-full px-4 py-3 rounded-md text-black" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className="block">Location</label>
                                <input {...register("location", { required: "Location is Required" })} type="text" name="location" placeholder="Location" className="w-full px-4 py-3 rounded-md text-black" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className="block">Years of Use</label>
                                <input {...register("used", { required: "This is Required" })} type="text" name="used" placeholder="Year of Use" className="w-full px-4 py-3 rounded-md text-black" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className="block">Years of Purchase</label>
                                <input {...register("date", { required: "Purchase year is Required" })} type="text" name="date" placeholder="Purchase Year" className="w-full px-4 py-3 rounded-md text-black" />
                            </div>
                            <div className="col-span-full">
                                <label className="block">Description</label>
                                <textarea {...register("desc", { required: "Description is Required" })} name="desc" className='w-full text-black p-5' rows="5"></textarea>
                            </div>
                            <div className="col-span-full">
                                <label className="block text-sm font-medium">Attachments</label>
                                <div className="flex">
                                    <input {...register("img", { required: "Image is Required" })} type="file" name="img" className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" />
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <button className="block p-3 text-center rounded-sm text-gray-900 bg-violet-400">Sign in</button>
                </form>
            </section>
        </div >
    );
};

export default AddProduct;