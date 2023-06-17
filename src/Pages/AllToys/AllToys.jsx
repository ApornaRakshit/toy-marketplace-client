import React from 'react';

const AllToys = () => {
   

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

export default AllToys;