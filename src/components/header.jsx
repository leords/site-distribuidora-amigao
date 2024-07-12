import React from "react";
import { FacebookLogo, InstagramLogo, WhatsappLogo  } from "@phosphor-icons/react";

import renderLogo from '../assets/img/amigaoLogoVertical.png';

export function Header() {
    return(
        <div className="w-full h-auto flex flex-col items-center justify-center bg-white pb-16">
            <div className="h-[42px] w-full flex flex-row items-center justify-end gap-3 px-10 mt-4">
                <FacebookLogo size={28} className="text-red-dark hover:size-[30px] hover:text-orange-dark"/>
                <InstagramLogo size={28} className="text-red-dark hover:size-[30px] hover:text-orange-dark "/>
            </div>
            <div className="h-auto flex flex-row items-center justify-center m-4">
                <img 
                    src={renderLogo}
                    alt="Logo da empresa, carrinho de compras seguido do nome da empresa, com determiada paleta de cores."
                    className="w-96 m-4"
                />
            </div>
            <div className="w-[80%] h-auto flex flex-row items-center justify-center my-4">
                <div className="w-[100%] flex flex-row items-center justify-center gap-x-16">
                    <h1 className="font-sans text-black font-[500] text-[22px] hover:text-red-dark focus:text-orange-dark">Inicio</h1>
                    <h1 className="font-sans text-black font-[500] text-[22px] hover:text-red-dark">Nossas Marcas</h1>
                    <h1 className="font-sans text-black font-[500] text-[22px] hover:text-red-dark">Cidades de Atendimento</h1>
                    <h1 className="font-sans text-black font-[500] text-[22px] hover:text-red-dark">Amigão</h1>
                    <h1 className="font-sans text-black font-[500] text-[22px] hover:text-red-dark">Contato</h1>
                </div>
                <div className="w-[20%] flex flex-row items-start justify-end">
                    <button className="bg-red-dark p-2 text-sm text-white rounded-md font-sans shadow-sm px-4 hover:bg-red-light ">Fale com a gente!</button>
                </div>
            

            </div>

        </div>
    )
}