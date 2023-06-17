import React from 'react';
import { useLoaderData } from 'react-router-dom';


const UpdatedToy = () => {

   const toy = useLoaderData()
    const { _id, name, price, sellerName, quantity, category, description, photo, rating } = toy;

    return (
        <>
            <div>
                <h2 className='text-4xl font-bold text-accent text-center mt-16'>Toy Name: {name}</h2>
            </div>
            
            {/* Open the modal using ID.showModal() method */}
            <button className="btn text-center text-white btn-success m-60" onClick={() => window.my_modal_2.showModal()}>open modal</button>
            <dialog id="my_modal_2" className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="py-4 text-xl font-semibold">Price: {price}tk</p>
                    <p className="py-4 text-xl font-semibold">Available Quantity: {quantity}</p>
                    <p className="py-4 text-xl font-semibold">Description: {description}</p>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </>

    );
};

export default UpdatedToy;