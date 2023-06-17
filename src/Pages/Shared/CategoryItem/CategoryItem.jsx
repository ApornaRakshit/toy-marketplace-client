import React, { } from 'react';


import {  useNavigate } from 'react-router-dom';


const CategoryItem = ({ item }) => {
    const { image, price, rating, name, _id} = item
    
    const navigate = useNavigate()
    
    const navigateToDetail = _id =>{
        navigate (`/cart/${_id}`)
    }

    

    return (
        <div className='m-5'>
            <div className="card w-full  mx-auto h-96 bg-base-100 shadow-xl">
                <figure><img className='p-5 h-auto w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title uppercase">{name}</h2>
                    <p>${price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => navigateToDetail(_id)} className="btn text-teal-600">View Detail</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryItem;
