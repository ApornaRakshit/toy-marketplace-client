import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ToyTable = ({ toy }) => {

    const { _id, name, price, sellerName, quantity, category, description, photo, rating } = toy;
    const handleDelete = _id => {
        console.log(_id)
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


                fetch(`https://toy-marketplace-server-six-lake.vercel.app/toy/${_id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
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
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Toy name: {name}</div>
                                        <div className="text-sm opacity-50">Seller Name:{sellerName}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Category: {category}
                            </td>
                            <td>Rating: {rating}</td>
                            <th className='gap-2'>
                                <Link to={`/updatedToy/${_id}`}><button className="btn btn-ghost btn-xs bg-green-500">Update</button></Link>
                                <button
                                    onClick={() => handleDelete(_id)}
                                    className="btn btn-ghost btn-xs bg-red-500">Delete</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ToyTable;







