import React from "react";

import renderLogoBranca from '../assets/avg/amigaoLogoVerticalBranco.svg';
import renderLogo from '../assets/logo/amigaoLogoVertical.png';
import { FacebookLogo, InstagramLogo, WhatsappLogo, Clock  } from '@phosphor-icons/react';


export function Footer() {
    return (
        <div className="w-full h-auto flex flex-row justify-center items-center">
            <div className="w-[85%] h-auto flex flex-row justify-center items-center p-10 bg-yellow-dark rounded-t-xl">
                <div className="w-full h-auto flex flex-row justify-between items-start">
                    <div className="h-[160px] flex flex-row justify-center items-start gap-20">
                        <div className="flex flex-col justify-center items-center gap-6">
                            <img 
                            src={renderLogo} 
                            alt="" 
                            className="w-[130px]"
                            />
                            <button className="bg-red-dark px-4 py-2 rounded-tl-xl rounded-br-xl rounded-bl-xl font-sans text-white text-[16px] font-[300] hover:bg-red-800">Venha ser um amigão!</button>        
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                            <a 
                            href=""
                            className="font-sans text-[18px]  font-[200] hover:text-red-dark"
                            >Quem somos</a>
                            <a 
                            href=""
                            className="font-sans text-[18px]  font-[200] hover:text-red-dark"
                            >Marcas</a>
                            <a 
                            href=""
                            className="font-sans text-[18px]  font-[200] hover:text-red-dark"
                            >Delivery</a>
                            <a 
                            href=""
                            className="font-sans text-[18px]  font-[200] hover:text-red-dark"
                            >Cadastre-se</a>
                    </div>

                    <div className="flex flex-col justify-start items-start">
                        <div className="flex flex-row items-center justify-center gap-2">
                        <Clock size={28} className="text-red-dark"/>
                        <p className="font-sans font-[600]">Atendimento:</p>
                        </div>
                        <div className="flex flex-col pl-6 pb-6">
                            <p>Segunda à Sexta das 8h às 12h e 14h às 18h.</p>
                            <p>Sábado das 8h às 12h.</p>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-2">
                        <WhatsappLogo size={28} className="text-red-dark" />
                        <p className="font-sans font-[600]">WhatsApp:</p>
                        </div>
                        <div className="flex flex-col pl-6">
                            <p>(47) 3622-4126</p>
                            <p>(47) 99602-0404</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start items-start">
                        <button></button>
                        <div className="flex flex-row items-center justify-start gap-2">
                            <p className="text-red-dark font-sans text-[26px] mr-4">Siga-nos</p>
                            <FacebookLogo size={28} className="text-red-dark hover:size-[30px] hover:text-white"/>
                            <InstagramLogo size={28} className="text-red-dark hover:size-[30px] hover:text-white "/>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-2 p-2">
                            <p className="font-sans text-[16px] font-[100]">R. Pastor George Weger, 120 - Centro</p>
                            <p className="font-sans text-[16px] font-[100]">Canoinhas - SC, 89460-144</p>
                            <div className="flex flex-row gap-2">
                                <p className="font-sans text-[16px] font-[600] text-red-dark">CNPJ:</p>
                                <p className="font-sans text-[16px] font-[100] text-black">41.836.758/0001-41</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}