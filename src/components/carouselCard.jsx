import React from "react";

import { Card } from './card'

import { Carousel } from "@material-tailwind/react";



export function CarouselCard() {
    return(
        <div className="w-full h-auto flew flex-col items-center justify-center py-10 bg-white">
            <div className="w-[100%] h-auto flex flex-col items-center justify-center">
                <div className="w-full flex flex-row items-center justify-start pb-10">
                    <h1 className="font-sans text-[36px] font-[700] text-red-dark px-[8%]">Nossas Marcas</h1>
                </div>
                <div className="w-full flex flex-row items-center justify-center gap-20">
                    <Card 
                        name='Brahma'
                        description='Cerveja'
                        img=''
                    />

                    <Card 
                        name='Brahma'
                        description='Cerveja'
                        img=''
                    />

                    <Card 
                        name='Brahma'
                        description='Cerveja'
                        img=''
                    />

                    <Card 
                        name='Brahma'
                        description='Cerveja'
                        img=''
                    />
                </div>
            </div>
        </div>
    )
}