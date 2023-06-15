import React from 'react';

import img1 from '../../../assets/banner/banner1.jpg';
import img2 from '../../../assets/banner/banner2.jpg';
import img3 from '../../../assets/banner/banner3.jpg';
import img4 from '../../../assets/banner/banner4.jpg';

const Banner = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <img src={img2} class="w-full" />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src={img1} class="w-full" />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src={img3} class="w-full" />
                </div>
                <div id="item4" class="carousel-item w-full">
                    <img src={img4} class="w-full" />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;