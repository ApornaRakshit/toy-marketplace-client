import React from 'react';

const CategoryItem = ({ item }) => {
    const { image, price, rating, name } = item

    return (
        <div className='m-5'>
            <div className="card w-full  mx-auto h-96 bg-base-100 shadow-xl">
            <figure><img className='p-5 h-auto w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title uppercase">{name}</h2>
                <p>${price}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn text-teal-600">View Detail</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CategoryItem;