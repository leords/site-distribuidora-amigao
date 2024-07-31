import React, { useEffect, useState } from "react";

import {CompanyHistory} from '../service/informative'
import renderHands from '../assets/img/history/hands.jpg';

export function History() {

    const [description, setDescription] = useState([]);


    useEffect(() => {
        const CompanyHistoryInstance = new CompanyHistory();
        setDescription(CompanyHistoryInstance.history.description);
    }, []);



    return(
        <div className="w-[100%] h-auto flex flex-col items-center justify-center py-10">
            <div className="w-[85%] h-auto flex flex-row justify-start items-center mb-10">
                <h1 className="font-sans text-red-dark font-[600] text-[42px]">Conheça o Amigão</h1>
            </div>
            <div className=" bg-red-dark w-[85%] h-auto flex flex-row items-center justify-center rounded-xl">
                <div className="flex justify-center items-center w-[50%] h-auto pl">
                    <img 
                        src={renderHands} 
                        alt="" 
                        className="w-[430px] h-auto"
                        />
                </div>
                <div className="flex w-[50%] py-10 pr-20">
                    <p className="font-sans text-white font-[200] text-[18px] text-justify">{description}</p>
                </div>

            </div>
        </div>
    )
}