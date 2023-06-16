import React from 'react';
import useCart from '../../hooks/useCart';
import { Navbar } from 'react-bootstrap';
import Swal from 'sweetalert2';

const MyToys = () => {
    const [cart,refetch] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <>
            <Navbar></Navbar>
            <div className='text-black text-3xl overflow-hidden my-20 w-full text-center flex justify-evenly' >
                <h3>Total Toys: {cart.length}</h3>
                <h3>Total Price: ${total}</h3>
                <button className='btn btn-success btn-sm'>Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Toy Name<br/>Description</th>
                            <th>Price</th>
                            <th>SellerEmail</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item,index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index+1}
                                </td>
                                <td>
                                 {item.name}<br/>{item.description}
                                </td>
                                <td>
                                   ${item.price}
                                </td>
                                <td>{item.email}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Update</button>
                                    <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <footer></footer>
        </>

    );
};

export default MyToys;