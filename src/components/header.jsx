import React from "react";
import { FacebookLogo, InstagramLogo, WhatsappLogo  } from "@phosphor-icons/react";

import renderLogo from '../assets/logo/amigaoLogoVertical.png';

export function Header() {
    return(
        <div className="w-full h-auto flex flex-col items-center justify-center bg-white pb-16">
            <div className="h-[42px] w-full flex flex-row items-center justify-end gap-3 px-10 mt-4">
                <a                     
                href="https://www.facebook.com/profile.php?id=100068341794040"
                target="_blank">
                    <FacebookLogo 
                        size={28} 
                        className="text-red-dark hover:size-[30px] hover:text-orange-dark"
                    />
                </a>
                <a 
                href="https://www.instagram.com/distribuidora_do_amigao/"
                target="_blank"
                >
                    <InstagramLogo 
                        size={28} 
                        className="text-red-dark hover:size-[30px] hover:text-orange-dark "
                />

                </a>
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
                    <a href="#header"><h1 className="font-sans text-black font-[500] text-[22px] hover:text-red-dark focus:text-orange-dark">Inicio</h1></a> 
                    <a href="#marcas"><h1 className="font-sans text-black font-[500] text-[22px] hover:text-red-dark">Nossas Marcas</h1></a> 
                    <a href="#history"><h1 className="font-sans text-black font-[500] text-[22px] hover:text-red-dark">Amigão</h1></a>
                    <a href=""><h1 className="font-sans text-black font-[500] text-[22px] hover:text-red-dark">Cidades de Atendimento</h1></a>
                    <a href=""><h1 className="font-sans text-black font-[500] text-[22px] hover:text-red-dark">Contato</h1></a>
                </div>
            

            </div>

        </div>
    )
}