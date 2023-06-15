import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import ByAge from '../Shop/ByAge';
import ByBrand from '../Shop/ByBrand';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <h2 className='text-4xl font-bold text-accent text-center mt-16'>Pick your perfect gift</h2>
            <ByAge></ByAge>
            <ByBrand></ByBrand>
            <Contact></Contact>
        </div>
    );
};

export default Home;