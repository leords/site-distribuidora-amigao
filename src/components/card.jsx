import React from "react";

export function Card(Props) {
    return (
        <div className="w-[18%] h-[320px] rounded-tl-2xl rounded-br-2xl p-6 border-2 border-orange shadow-lg">
            <h1 className="font-sans text-red-dark font-[500] text-[24px]">{Props.name}</h1>
            <p className="font-sans font-[400] text-[16px]" >{Props.description}</p>
            <img src={Props.img} alt="imagem referente a marca." />
        </div>
    )
}