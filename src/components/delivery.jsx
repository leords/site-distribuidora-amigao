import React from "react";

import { WhatsappLogo } from '@phosphor-icons/react'

import renderImageDelivery from '../assets/img/delivery/delivery-img.png';

export function Delivery() {
    return (
        <div className="w-[100%] h-auto flex flex-col items-center justify-center mb-20">
            <div className="w-[85%] h-auto flex flex-row justify-start items-center mb-10">
                <h1 className="font-sans text-red-dark font-[600] text-[42px]">Amigão Delivery</h1>
            </div>
            <div className="w-[85%] h-auto flex flex-row justify-between items-center">
                <div className="w-[50%] flex flex-row items-start justify-start bg-indigo-100">
                    <img 
                    src={renderImageDelivery} 
                    alt="" />
                </div>
                <div className="w-[50%] h-auto flex flex-col items-center justify-start p-14">
                    <h1 className="font-sans text-red-dark font-[600] text-[42px]">Delivery Amigão</h1>
                    <p className="font-sans text-black font-[200] text-[22px] text-justify mb-10">Nosso delivery realiza entregas em toda a parte urbana da cidade, garantindo um tempo de entrega rápido e com o melhor preço. Faça seu pedido pelo WhatsApp e tenha contato direto com um de nossos vendedores!</p>

                    <p className="font-sans text-black font-[200] text-[22px] text-justify mb-10">Precisou? pediu, entrogou! </p>
                
                    <p className="font-sans text-red-dark font-[600] text-[20px] text-center mb-10">Para contato, deixe seu número. Entraremos em contato com você! </p>
                    <form class="max-w-xs mx-auto">
                        <div class="relative flex flex-row gap-4 items-center">

                            <input 
                                className="w-56 h-10 rounded-lg border-2 border-red-300 hover:border-red-600 focus:outline-none focus:ring-red-600 p-2"
                                type="text" 
                            />

                            <button className="w-20 h-10 rounded-md bg-red-600 hover:bg-red-300 text-white font-semibold">
                                enviar
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}