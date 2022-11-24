import React from 'react';
import Advertised from '../Advertised/Advertised';
import Categories from '../Categories/Categories';
import Slider from '../Sliders/Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Categories></Categories>
            <Advertised></Advertised>
        </div>
    );
};

export default Home;