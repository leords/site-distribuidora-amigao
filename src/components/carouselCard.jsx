import React, { useState, useEffect } from "react";

import { Card } from './card'

import { Carousel } from "@material-tailwind/react";
import { Clouds } from "../service/informative";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const cloudsIstance = new Clouds();

const clouds = cloudsIstance.cloud;


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
            const cloudValues = Object.values(cloudsInstance.cloud);
            setClouds(cloudValues);
        }, []); 


    return(
        <div className="w-[100%] flex flex-col items-center justify-center py-10">
            <div className="w-[85%] flex flex-row justify-start ">
                <h1 className="font-sans text-red-dark font-[600] text-[42px] pb-10">Nossas Marcas</h1>
            </div>
            <div className="w-[85%] h-auto flex flex-row justify-center items-center pl-9">
                    <Slider
                        {...settings}
                        className="w-full flex flex-row items-center justify-center">

                        {clouds.map((cloudItem, index) => {
                            return (
                                <div
                                key={index}
                                className="flex flex-row items-center justify-center"                              
                                >
                                    <Card img={cloudItem.img} />
                                </div>                               
                                )
                        })}
                    </Slider>
            </div>

        </div>
    )
}