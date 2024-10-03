import renderLogo from '../assets/logo/amigaoLogoVertical.png';
import { FacebookLogo, InstagramLogo, WhatsappLogo, Clock  } from '@phosphor-icons/react';


export function Footer() {
    return (
        <div className="w-full h-auto flex justify-center items-center bg-gray-100 py-12">
          <div className="w-[90%] lg:w-[85%] flex flex-col lg:flex-row justify-between items-start p-8 bg-yellow-dark rounded-t-xl">
            {/* Logo e Chamada */}
            <div className="flex flex-col items-center justify-center mb-8 lg:mb-0 lg:mr-16">
              <img
                src={renderLogo}
                alt="Logo da empresa"
                className="w-[120px] md:w-[130px] object-contain"
              />
              <button className="bg-red-dark px-6 py-3 mt-6 rounded-tl-xl rounded-br-xl text-white text-[16px] font-[300] hover:bg-red-800 transition-all">
                Venha ser um amigão!
              </button>
            </div>
      
            {/* Links Rápidos */}
            <div className="flex flex-col items-start justify-start mb-8 lg:mb-0 lg:mr-16">
              <a href="" className="font-sans text-[18px] font-[200] text-black hover:text-red-dark mb-2 transition-all">
                Quem somos
              </a>
              <a href="" className="font-sans text-[18px] font-[200] text-black hover:text-red-dark mb-2 transition-all">
                Marcas
              </a>
              <a href="" className="font-sans text-[18px] font-[200] text-black hover:text-red-dark mb-2 transition-all">
                Delivery
              </a>
              <a href="" className="font-sans text-[18px] font-[200] text-black hover:text-red-dark mb-2 transition-all">
                Cadastre-se
              </a>
            </div>
      
            {/* Atendimento e Contato */}
            <div className="flex flex-col justify-start items-start mb-8 lg:mb-0 lg:mr-16">
              <div className="flex flex-row items-center mb-4">
                <Clock size={28} className="text-red-dark mr-2" />
                <p className="font-sans font-[600] text-black">Atendimento:</p>
              </div>
              <div className="pl-6 mb-6 text-black font-sans">
                <p>Segunda à Sexta: 8h - 12h e 14h - 18h</p>
                <p>Sábado: 8h - 12h</p>
              </div>
              <div className="flex flex-row items-center mb-4">
                <WhatsappLogo size={28} className="text-red-dark mr-2" />
                <p className="font-sans font-[600] text-black">WhatsApp:</p>
              </div>
              <div className="pl-6 font-sans text-black">
                <p>(47) 3622-4126</p>
                <p>(47) 99602-0404</p>
              </div>
            </div>
      
            {/* Redes Sociais e Endereço */}
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-center mb-4">
                <p className="text-red-dark font-sans text-[26px] font-bold mr-4">Siga-nos</p>
                <a href="https://facebook.com" className="transition-transform transform hover:scale-110">
                  <FacebookLogo size={28} className="text-red-dark" />
                </a>
                <a href="https://instagram.com" className="transition-transform transform hover:scale-110 ml-4">
                  <InstagramLogo size={28} className="text-red-dark" />
                </a>
              </div>
              <div className="text-black font-sans text-[16px] font-[200] mb-2">
                <p>R. Pastor George Weger, 120 - Centro</p>
                <p>Canoinhas - SC, 89460-144</p>
              </div>
              <div className="flex flex-row gap-2 text-black font-sans text-[16px]">
                <p className="font-[600] text-red-dark">CNPJ:</p>
                <p className="font-[200]">41.836.758/0001-41</p>
              </div>
            </div>
          </div>
        </div>
      );
}