import { useEffect, useState } from "react";

import {CompanyHistory} from '../service/informative'
import renderHands from '../assets/img/history/hands.jpg';

export function History() {

    const [description, setDescription] = useState([]);


    useEffect(() => {
        const CompanyHistoryInstance = new CompanyHistory();
        setDescription(CompanyHistoryInstance.history.description);
    }, []);



    return (
        <div className="w-full h-auto flex flex-col items-center justify-center py-10">
            <div className="w-11/12 lg:w-4/5 h-auto flex flex-col lg:flex-row justify-start items-center mb-10">
                <h1 className="font-sans text-red-600 font-bold text-3xl lg:text-4xl">Conheça o Amigão</h1>
            </div>
            <div className="bg-red-600 w-11/12 lg:w-4/5 h-auto flex flex-col lg:flex-row items-center justify-center rounded-xl">
                <div className="flex justify-center items-center w-full lg:w-1/2 h-auto p-5 lg:pl-10">
                    <img 
                        src={renderHands} 
                        alt="Imagem de apresentação" 
                        className="w-full max-w-xs lg:max-w-sm h-auto"
                    />
                </div>
                <div className="flex w-full lg:w-1/2 py-5 lg:py-10 px-5 lg:pr-20">
                    <p className="font-sans text-white font-light text-base lg:text-lg text-justify">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}