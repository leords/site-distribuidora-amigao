import React from "react";

import { UsersThree, Storefront, Star, Package, MapTrifold  } from "@phosphor-icons/react";

export function Numbers() {
    return (
        <div className="w-[100%] h-auto flex flex-col items-center justify-center mb-20">
            <div 
                className="w-[85%] h-[300px] flex flex-row items-center justify-evenly p-10 rounded-xl bg-red-dark"
               /*  style={{ 
                    backgroundImage: `url(${imageRenderBG})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                 }} */

                    
                >
                <div className="w-auto h-auto flex flex-col items-center justify-center p-2 gap-3">
                    <Storefront 
                    size={60} 
                    weight="thin"
                    className="text-white"
                    />
                    <p className="font-mount text-[34px] text-yellow-dark font-[700]">683</p>
                    <p className="font-sans text-[22px] text-white font-[400]">Clientes</p>
                </div>
                <div className="w-auto h-auto flex flex-col items-center justify-center p-2 gap-3">
                    <MapTrifold 
                    size={60} 
                    weight="thin"
                    className="text-white" 
                    />
                    <p className="font-mount text-[34px] text-yellow-dark font-[700]">7</p>
                    <p className="font-sans text-[22px] text-white font-[400]">Cidades</p>
                </div>
                <div className="w-auto h-auto flex flex-col items-center justify-center p-2 gap-3">
                    <UsersThree 
                    size={60} 
                    weight="thin"
                    className="text-white" 
                    />
                    <p className="font-mount text-[34px] text-yellow-dark font-[700]">18</p>
                    <p className="font-sans text-[22px] text-white font-[400]">Colaboradores</p>
                </div>
                <div className="w-auto h-auto flex flex-col items-center justify-center p-2 gap-3">
                    <Star 
                    size={60} 
                    weight="thin"
                    className="text-white" 
                    />
                    <p className="font-mount text-[34px] text-yellow-dark font-[700]">37</p>
                    <p className="font-sans text-[22px] text-white font-[400]">Marcas</p>
                </div>
                <div className="w-auto h-auto flex flex-col items-center justify-center p-2 gap-3">
                    <Package 
                    size={60} 
                    weight="thin"
                    className="text-white" 
                    />
                    <p className="font-mount text-[34px] text-yellow-dark font-[700]">523</p>
                    <p className="font-sans text-[22px] text-white font-[400]">Produtos</p>
                </div>
            </div>
        </div>
    )
}