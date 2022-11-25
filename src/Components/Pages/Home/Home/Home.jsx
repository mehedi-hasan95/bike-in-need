import React from 'react';
import About from '../About/About';
import Advertised from '../Advertised/Advertised';
import Categories from '../Categories/Categories';
import Reviews from '../Reviews/Reviews';
import Slider from '../Sliders/Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Categories></Categories>
            <Advertised></Advertised>
            <Reviews></Reviews>
            <About></About>
        </div>
    );
};

export default Home;