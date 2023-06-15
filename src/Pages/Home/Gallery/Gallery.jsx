import React from 'react';
import img1 from '../../../assets/car/car1.jpg';
import img2 from '../../../assets/car/car2.jpg';
import img3 from '../../../assets/car/car3.jpg';
import img4 from '../../../assets/police/police4.jpg';
import img5 from '../../../assets/sports/sport3.jpg';

const Gallery = () => {
    return (
        <div className='flex items-center lg:mx-[220px] sm:mx-[100px] my-9'>
            <div>
                <h1 className='text-center text-3xl italic font-bold text-emerald-400 mb-4'>Bring home the fun</h1>
                <p className='text-center italic underline text-blue-600 mb-4'><a href='/'>Free shipping for orders over $50</a></p>
                <div className='grid justify-items-center gallery grid-rows-2 grid-flow-col gap-4'>
                    <div className='gallery-item'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='gallery-item'>
                        <img src={img5} alt="" />
                    </div>
                    <div className='gallery-item row-span-2'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='gallery-item'>
                        <img src={img4} alt="" />
                    </div>
                    <div className='gallery-item'>
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Gallery;