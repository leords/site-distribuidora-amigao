import React, { useState, useEffect } from "react";

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


    return(
        <div className="w-[100%] h-auto flex flex-col items-center justify-center pt-10 pb-20">
            <div className="w-[85%] h-auto flex flex-row justify-start items-center mb-10">
                <h1 className="font-sans text-red-dark font-[600] text-[42px]">Nossas Marcas</h1>
            </div>
            <div className="w-[85%] h-auto flex flex-row justify-center items-center">
                    <Slider
                        {...settings}
                        className="w-full h-auto flex flex-row items-center justify-center ">

                        {clouds.length > 0 ? (
                            clouds.map((cloudItem, index) => (
                                <div
                                    key={index}
                                    className="flex flex-row items-center justify-center"
                                >
                                    <Card image={cloudItem.img} />
                                </div>
                            ))
                        ) : (
                            <p>Not found</p>
                    )}
                    </Slider>
            </div>

        </div>
    )
}