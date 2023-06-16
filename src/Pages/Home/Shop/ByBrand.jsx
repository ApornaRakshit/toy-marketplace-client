import React from 'react';
import { Link } from 'react-router-dom';
import b1 from '../../../assets/brands/Fisher-Price.png';
import b2 from '../../../assets/brands/funko.png';
import b3 from '../../../assets/brands/hot-wheels.png';
import b4 from '../../../assets/brands/lego-store.png';

const ByBrand = () => {
    return (
          <div className='mx-10 my-16'>
            <span className='text-3xl text-gray-400 italic bg-white p-6 ms-10 font-bold'>by brand</span>
            <div className='grid place-items-center justify-items-center grid-cols-2 md:grid-cols-4 lg:grid-cols-4 py-6 text-center underline border-dashed border-2 rounded-3xl border-gray-300'>
            <Link to="/"><img className='w-56' src={b1} alt="" /><p className='mt-4'>Fisher-price</p></Link>
            <Link to="/"><img className='w-60' src={b2} alt="" /><p className='-mt-6 pb-8'>Funko</p></Link>
            <Link to="/"><img className='w-60 h-36' src={b3} alt="" /><p>Hot-Wheels</p></Link>
            <Link to="/"><img className='w-36' src={b4} alt="" /><p>LEGO-store</p></Link>
            </div>
          </div>
        
    );
};

export default ByBrand;