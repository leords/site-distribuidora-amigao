import { useState, useEffect } from "react";

import { Card } from './card';
import { Clouds } from '../service/informative';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Mostrar 3 slides por vez
    slidesToScroll: 3
};



export function CarouselCard() {

    const [clouds, setClouds] = useState([]);

        useEffect(() => {
            const cloudsInstance = new Clouds();
            setClouds(Object.values(cloudsInstance.cloud));  
        }, []); 


        return (
            <div className="w-full h-auto flex flex-col items-center justify-center pt-10 pb-20">
                <div className="w-11/12 lg:w-4/5 h-auto flex flex-row justify-start items-center mb-10">
                    <h1 className="font-sans text-red-600 font-semibold text-3xl lg:text-4xl">Nossas Marcas</h1>
                </div>
                <div className="w-11/12 lg:w-4/5 h-auto flex justify-center items-center">
                    <Slider
                        {...settings}
                        className="w-full h-auto flex items-center justify-center pl-4 sm:pl-6">
                        
                        {clouds.length > 0 ? (
                            clouds.map((cloudItem, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center px-4">
                                    <Card image={cloudItem.img} />
                                </div>
                            ))
                        ) : (
                            <p>Not found</p>
                        )}
                    </Slider>
                </div>
            </div>
        );
}