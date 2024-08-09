import React, { useEffect, useState } from "react";
import { UsersThree, Storefront, Star, Package, MapTrifold  } from "@phosphor-icons/react";
import axios from "axios";
import { api } from "../service/api";


export function Numbers() {

  const [value, setValue] = useState({});

  useEffect(() => {
    
    async function getData() {
      try {
        const response = await axios.get('https://script.google.com/macros/s/AKfycbxCEDf31TcLS6WKmQcCRBq6F9NWJekgbzL5gOZho8_bhjffdrJvYJZW9xONxswWAc-u/exec');
        setValue(response.data.saida[0]);
        
      } catch (error) {
        console.error("There was an error!", error);
      }
    }


    getData();

    

  }, []);


    return (
        <div className="w-[100%] h-auto flex flex-col items-center justify-center mb-20">
            <div className="w-[85%] h-[300px] flex flex-row items-center justify-evenly p-10 rounded-xl bg-yellow-dark">
                <div className="w-auto h-auto flex flex-col items-center justify-center p-2 gap-3">
                    <Storefront 
                    size={60} 
                    weight="thin"
                    className="text-black"
                    />
                    <p className="font-mount text-[34px] text-red-dark font-[700]">{value.Clientes}</p>
                    <p className="font-sans text-[22px] text-black font-[400]">Clientes</p>
                </div>
                <div className="w-auto h-auto flex flex-col items-center justify-center p-2 gap-3">
                    <MapTrifold 
                    size={60} 
                    weight="thin"
                    className="text-black" 
                    />
                    <p className="font-mount text-[34px] text-red-dark font-[700]">{value.Cidades}</p>
                    <p className="font-sans text-[22px] text-black font-[400]">Cidades</p>
                </div>
                <div className="w-auto h-auto flex flex-col items-center justify-center p-2 gap-3">
                    <UsersThree 
                    size={60} 
                    weight="thin"
                    className="text-black" 
                    />
                    <p className="font-mount text-[34px] text-red-dark font-[700]">{value.Colaboradores}</p>
                    <p className="font-sans text-[22px] text-black font-[400]">Colaboradores</p>
                </div>
                <div className="w-auto h-auto flex flex-col items-center justify-center p-2 gap-3">
                    <Star 
                    size={60} 
                    weight="thin"
                    className="text-black" 
                    />
                    <p className="font-mount text-[34px] text-red-dark font-[700]">{value.Marcas}</p>
                    <p className="font-sans text-[22px] text-black font-[400]">Marcas</p>
                </div>
                <div className="w-auto h-auto flex flex-col items-center justify-center p-2 gap-3">
                    <Package 
                    size={60} 
                    weight="thin"
                    className="text-black" 
                    />
                    <p className="font-mount text-[34px] text-red-dark font-[700]">{value.Produtos}</p>
                    <p className="font-sans text-[22px] text-black font-[400]">Produtos</p>
                </div>
            </div>
        </div>
    )
}