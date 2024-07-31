import React from "react";

import imageRenderClient from '../assets/icone/numbers/clientes.png';
import imageRenderColaboradores from '../assets/icone/numbers/colaboradores.png';
import imageRenderMarcas from '../assets/icone/numbers/marcas.png';
import imageRenderProdutos from '../assets/icone/numbers/produtos.png';
import imageRenderBG from '../assets/img/numbers/empresa.png';

export function Numbers() {
    return (
        <div className="w-[100%] h-auto flex flex-col items-center justify-center mb-20">
            <div 
                className="w-[85%] h-[300px] flex flex-row items-center justify-evenly p-10 rounded-xl"
                style={{ 
                    backgroundImage: `url(${imageRenderBG})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                 }}
                >
                <div className="w-auto h-auto flex flex-col items-center justify-center p-2">
                    <p className="font-mount text-[24px] text-white font-[800]">Clientes</p>
                    <p className="font-mount text-[28px] text-orange-dark font-[600]">683</p>
                </div>
                <div className="flex flex-col items-center justify-center">

                    <p className="font-mount text-[24px] text-white font-[800]">Colaboradores</p>
                    <p className="font-mount text-[28px] text-orange-dark font-[600]">18</p>
                </div>
                <div className="w-auto h-auto flex flex-col items-center justify-center p-2">
                    <p className="font-mount text-[24px] text-white font-[800]">Marcas</p>
                    <p className="font-mount text-[28px] text-orange-dark font-[600]">37</p>
                </div>
                <div className="w-auto h-auto flex flex-col items-center justify-center p-2">
                    <p className="font-mount text-[24px] text-white font-[800]">Produtos</p>
                    <p className="font-mount text-[28px] text-orange-dark font-[600]">523</p>
                </div>
                <div className="w-auto h-auto flex flex-col items-center justify-center p-2">
                    <p className="font-mount text-[24px] text-white font-[800]">Cidades</p>
                    <p className="font-mount text-[28px] text-orange-dark font-[600]">7</p>
                </div>
            </div>
        </div>
    )
}