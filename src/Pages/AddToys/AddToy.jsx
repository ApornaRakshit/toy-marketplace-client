import React from 'react'
import Swal from 'sweetalert2';

const AddToy = () => {

    const handleAddToy = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const sellerName = form.sellerName.value;

        const quantity = form.quantity.value;
        const price = form.price.value;
        const category = form.category.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const newToy = { name, price, sellerName, quantity, category, description, photo, rating }
        console.log(newToy)


        fetch('http://localhost:5000/toy',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your toy has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }


    return (
        <div className='text-3xl text-center my-15'>
            <h3>Add A Toy</h3>
            <form onSubmit={handleAddToy}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Toy Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"> Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder=" Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"> Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder=" Rating" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="sellerName" placeholder="Seller Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text w-full">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Details" className="input input-bordered text-center" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                <input type="submit"  value="Add Toy" className="btn btn-block btn-success" />

            </form>
        </div>
    );
};

export default AddToy;