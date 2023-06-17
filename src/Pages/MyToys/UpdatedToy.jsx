import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdatedToy = () => {

    const toy = useLoaderData()
    const { _id, name, price, quantity, description} = toy;
    const handleUpdateToy = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const description = form.description.value;
        const updatedToy = { name, price, quantity, description}
        console.log(updatedToy)


        fetch(`https://toy-marketplace-server-six-lake.vercel.app/toy/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Toy things updated successfully!',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }


    return (
        <>
            <div>
                <h2 className='text-4xl font-bold text-accent text-center mt-16'>Updated Toy field{name}</h2>
            </div>

            {/* Open the modal using ID.showModal() method */}
            <button className="btn text-center text-white btn-success m-60" onClick={() => window.my_modal_2.showModal()}>open modal</button>
            <dialog id="my_modal_2" className="modal">
                
            <form onSubmit={handleUpdateToy}>
                {/* form name and quantity row */}
                <div className="md mb-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Toy Name" defaultValue={name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ml-4">
                        <label className="label">
                            <span className="label-text"> Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} placeholder=" Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ml-4">
                        <label className="label">
                            <span className="label-text"> Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    

                </div>
                
                
                {/* form category and details row */}
                <div className=" mb-8">
                    
                    <div className="form-control  ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={description} placeholder="Details" className="input input-bordered text-center" />
                        </label>
                    </div>
                </div>
                
                <input type="submit"  value="Update Toy Value" className="btn btn-block btn-success btn-md" />

            </form>
        
            </dialog>

        </>

    );
};

export default UpdatedToy;