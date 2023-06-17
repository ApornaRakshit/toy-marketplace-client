import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';

const CategoryItem = ({ item }) => {
    const { image, price, rating, name, _id,quantity, description } = item
    const { user } = useContext(AuthContext)
    const [,refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation()

    const handleViewDetail = item => {
        console.log(item)
        if (user && user.email) {
            const cartItem = {toyCategoryId: _id, name, price, email: user.email, sellerName:user.name, quantity, description, rating}
            fetch('https://toy-marketplace-server-six-lake.vercel.app/carts', {
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Toy added on the cart...',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
            })
        }
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
                        <button onClick={() => handleViewDetail(item)} className="btn text-teal-600">View Detail</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryItem;