import React from "react";

import renderImgWpp from '../assets/img/footer/wpp-msg.png';

export function FloatingButton() {
    return (
        <div className="flex flex-col justify-center items-end w-[400px] h-auto pr-4 pb-4 drop-shadow-md animate-bounce">

                <img 
                href=""
                target={""}
                className="w-[70%] h-auto"
                src={renderImgWpp} 
                alt="" />
        </div>
    )
}