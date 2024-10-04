import { useEffect, useState } from "react";
import { UsersThree, Storefront, Star, Package, MapTrifold  } from "@phosphor-icons/react";
import axios from "axios";


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
    <div className="w-full h-auto flex flex-col items-center justify-center mb-20">
        <div className="w-11/12 lg:w-4/5 h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-10 rounded-xl bg-yellow-dark">
            <div className="flex flex-col items-center justify-center p-2 gap-3">
                <Storefront 
                    size={60} 
                    weight="thin"
                    className="text-black"
                />
                <p className="font-sans text-3xl text-red-600 font-bold">{value.Clientes}</p>
                <p className="font-sans text-lg text-black">Clientes</p>
            </div>
            <div className="flex flex-col items-center justify-center p-2 gap-3">
                <MapTrifold 
                    size={60} 
                    weight="thin"
                    className="text-black" 
                />
                <p className="font-sans text-3xl text-red-600 font-bold">{value.Cidades}</p>
                <p className="font-sans text-lg text-black">Cidades</p>
            </div>
            <div className="flex flex-col items-center justify-center p-2 gap-3">
                <UsersThree 
                    size={60} 
                    weight="thin"
                    className="text-black" 
                />
                <p className="font-sans text-3xl text-red-600 font-bold">{value.Colaboradores}</p>
                <p className="font-sans text-lg text-black">Colaboradores</p>
            </div>
            <div className="flex flex-col items-center justify-center p-2 gap-3">
                <Star 
                    size={60} 
                    weight="thin"
                    className="text-black" 
                />
                <p className="font-sans text-3xl text-red-600 font-bold">{value.Marcas}</p>
                <p className="font-sans text-lg text-black">Marcas</p>
            </div>
            <div className="flex flex-col items-center justify-center p-2 gap-3">
                <Package 
                    size={60} 
                    weight="thin"
                    className="text-black" 
                />
                <p className="font-sans text-3xl text-red-600 font-bold">{value.Produtos}</p>
                <p className="font-sans text-lg text-black">Produtos</p>
            </div>
        </div>
    </div>
  )
}