import React from 'react';

const Contact = () => {
    return (
        <div className='my-20'>
            
            <h1 className='text-xl font-bold text-accent text-center'>CONTACT || SUBSCRIBE</h1>
            <div className=' flex justify-center mt-8'>
                <div className="card w-4/5 bg-base-100 shadow-2xl">
                    <div className="card-body items-center grid lg:grid-cols-2 gap-20">
                        <div>
                            <p className='text-xl font-bold'>Have any question about us or get a product request?</p><br></br>
                            <p className='text-accent -mt-4'>Don't hesitate to contact us</p>
                            <p className="card-actions mt-4">
                                <button className="btn btn-sm btn-accent text-white">Request for Quote</button>
                                <button className="btn btn-sm text-accent">Contact us</button>
                            </p>
                        </div>
                        <div>
                            <div className='lg:col-span-2'>
                                <h4 className='font-bold text-2xl text-accent'>Sign up for 15% off!</h4>
                                <p><small>Take 15% off accessories & conversion kits on your first order!</small></p>
                                <h5>Email Address</h5>
                                <input className='my-2 border-solid border-2 border-accent' type="text" /><br />
                                <button className="btn btn-outline btn-wide btn-sm btn-accent">Subscribe</button>
                                <p>By subscribing you agree to the terms of service and privacy policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;