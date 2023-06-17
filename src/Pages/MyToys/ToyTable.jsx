import React from 'react';

const ToyTable = ({ toy }) => {

    const { name, price, sellerName, quantity, category, description, photo, rating } = toy;

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
                            <th>
                                <button className="btn btn-ghost btn-xs">Update</button>
                                <button className="btn btn-ghost btn-xs">Delete</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default ToyTable;







