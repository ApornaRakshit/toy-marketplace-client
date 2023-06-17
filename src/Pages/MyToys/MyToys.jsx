import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyTable from './ToyTable';

const MyToys = () => {

    const toys = useLoaderData();

    return (
        <>
            <h1 className='text-3xl font-semibold text-black text-center'>My Toys:{toys.length}</h1>
            {
                toys.map(toy => <ToyTable
                    key={toy._id}
                    toy={toy}
                >
                    
                </ToyTable>)
            }
        </>


    );
};

export default MyToys;