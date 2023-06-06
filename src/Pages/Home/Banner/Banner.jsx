import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/banner/banner1.jpg';
import img2 from '../../../assets/banner/banner2.jpg';
import img3 from '../../../assets/banner/banner3.jpg';
import img4 from '../../../assets/banner/banner4.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={img1} />
                    <p className="legend">Kids Vehicles <br />Best Car toys For Kids - Find a wide selection of  sports car, truck, regular car, mini fire truck, mini police car, etc here.</p> 
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Kids Vehicles <br />Best Car toys For Kids - Find a wide selection of  sports car, truck, regular car, mini fire truck, mini police car, etc here.</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Kids Vehicles <br />Best Car toys For Kids - Find a wide selection of  sports car, truck, regular car, mini fire truck, mini police car, etc here.</p>
                </div>
                <div>
                    <img src={img4} />
                    <p className="legend">Kids Vehicles <br />Best Car toys For Kids - Find a wide selection of  sports car, truck, regular car, mini fire truck, mini police car, etc here.</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;