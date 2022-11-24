import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({cat}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={cat.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{cat.name}</h2>
                <p>{cat.desc}</p>
                <div className="card-actions justify-end">
                    <Link to={`http://localhost:5000/categories/${cat.category}`} className="btn btn-primary">View More</Link>
                </div>
            </div>
        </div>
    );
};

export default Category;