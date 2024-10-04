import { Carousel} from "@material-tailwind/react";

import render1 from '../assets/img/carousel/carousel1.png'
import render2 from '../assets/img/carousel/carousel2.png'
import render3 from '../assets/img/carousel/carousel3.png'


export function CarouselBanner() {
    return (
        <div className="w-full h-auto flex flex-row items-center justify-center bg-white py-10">
            <Carousel 
                transition={{ duration: 1 }} 
                className="w-[85%] h-auto"
                loop={true}
                autoplay={true}
            >
                <img
                    src={render1}
                    alt="Imagem 1"
                    className="h-auto w-full object-cover rounded-lg" // Ajuste a altura conforme necessário
                /> 
                <img
                    src={render2}
                    alt="Imagem 2"
                    className="h-auto  w-full object-cover rounded-lg" // Ajuste a altura conforme necessário
                />
                <img
                    src={render3}
                    alt="Imagem 3"
                    className="h-auto  w-full object-cover rounded-lg" // Ajuste a altura conforme necessário
                />
            </Carousel>
        </div>
    );
}