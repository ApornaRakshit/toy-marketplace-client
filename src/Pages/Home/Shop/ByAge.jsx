import React from 'react';
import { Link } from 'react-router-dom';
import i1 from '../../../assets/icons/i1.png';
import i2 from '../../../assets/icons/i2.png';
import i3 from '../../../assets/icons/i3.png';
import i4 from '../../../assets/icons/i4.png';
import i5 from '../../../assets/icons/i5.png';

const ByAge = () => {
    return (
        <div className='mx-10 my-8'>
            <span className='text-3xl text-gray-400 italic bg-white p-6 ms-10 font-bold'>by age</span>
            <div className='grid justify-items-center grid-cols-3 md:grid-cols-5 lg:grid-cols-5 py-6 border-dashed border-2 rounded-3xl border-gray-300'>
            <Link to="/"><img className='w-100 pt-2 lg:pt-4' style={{ height: "" }} src={i1} alt="" /></Link>
            <Link to="/"><img className='w-100' style={{ height: "" }} src={i2} alt="" /></Link>
            <Link to="/"><img className='w-100' style={{ height: "" }} src={i3} alt="" /></Link>
            <Link to="/"><img className='w-100' style={{ height: "" }} src={i4} alt="" /></Link>
            <Link to="/"><img className='w-100' style={{ height: "" }} src={i5} alt="" /></Link>
            </div>
            
        </div>
    );
};

export default ByAge; 