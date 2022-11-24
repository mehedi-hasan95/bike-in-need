import React from 'react';

const SliderItem = ({slide}) => {
    const { image, prev, next, id, title } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className="img-gradient relative">
                <img src={image} className="w-full" alt='' />
            </div>
            <div className="absolute flex justify-start gap-5 transform -translate-y-1/2 left-0 md:left-1/2 top-1/4 text-3xl md:text-4xl w-full lg:text-6xl lg:w-[500px] font-bold text-white">
                <h2>{title}</h2>
            </div>
            <div className="absolute justify-start gap-5 transform hidden lg:block -translate-y-1/2 left-1/2 top-2/4 text-lg text-white">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quasi laudantium quaerat.</p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default SliderItem;