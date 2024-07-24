import React from "react";

export function Card(Props) {
    return (
        <div className="flex flex-row w-[360px] h-[250px] items-center justify-center rounded-tl-2xl rounded-br-2xl p-6 border-2 ">
            <img className="w-[240px] h-auto" src={Props.img} alt="imagem referente a marca." />
        </div>
    )
}