import React from 'react';

import img1 from '../../../../../assets/slider-1.jpg';
import img2 from '../../../../../assets/slider-2.jpg';
import img3 from '../../../../../assets/slider-3.jpg';
import SliderItem from '../SliderItem/SliderItem';

const sliderData = [
    {
        image: img1,
        title: 'AGILITY AND PERFORMANCE',
        prev: 6,
        next: 2,
        id: 1,
    },
    {
        image: img2,
        title: 'SLICK NEW CARBON BODY',
        prev: 1,
        next: 3,
        id: 2,
    },
    {
        image: img3,
        title: 'HITTING THE APEX HEAD ON',
        prev: 2,
        next: 1,
        id: 3,
    }
]

const Slider = () => {
    return (
        <div className="carousel w-full mb-12 md:mb-20 lg:mb-32">
            {
                sliderData.map(slide => <SliderItem key={slide.id} slide={slide}></SliderItem>)
            }
        </div>
    );
};

export default Slider;