import renderLogo from '../assets/logo/amigaoLogoVertical.png';
import { FacebookLogo, InstagramLogo} from '@phosphor-icons/react';


export function Footer() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-red-dark mt-28">
      <div className="w-full flex flex-col md:flex-row items-center justify-between bg-yellow-600 py-5 px-10 md:px-36">
        <img
          src={renderLogo}
          alt="Logo da empresa"
          className="w-[96px] object-contain mb-4 md:mb-0"
        />
        <div className="flex flex-row items-center">
          <p className="text-red-dark font-sans text-[20px] font-bold mr-4">
            Siga-nos
          </p>
          <a
            href="https://facebook.com"
            className="transition-transform transform hover:scale-110"
          >
            <FacebookLogo size={28} className="text-red-dark" />
          </a>
          <a
            href="https://instagram.com"
            className="transition-transform transform hover:scale-110 ml-2"
          >
            <InstagramLogo size={28} className="text-red-dark" />
          </a>
        </div>
      </div>
  
      <div className="w-full flex flex-col md:flex-row justify-around items-center py-4">
        <div className="flex flex-col items-center md:items-start text-yellow-dark font-sans text-[15px] font-[200]">
          <p className="text-white font-sans text-[18px]">Atendimento:</p>
          <p className="pl-4">Segunda à Sexta: 8h - 12h e 14h - 18h</p>
          <p className="pl-4">Sábado: 8h - 12h</p>
        </div>
  
        <div className="flex flex-col items-center md:items-start text-yellow-dark font-sans text-[15px] font-[200] mt-4 md:mt-0">
          <p className="text-white font-sans text-[18px]">Contato:</p>
          <p className="pl-4">(47) 3622-4126</p>
          <p className="pl-4">(47) 99602-0404</p>
        </div>
  
        <div className="flex flex-col items-center md:items-start text-yellow-dark font-sans text-[15px] font-[200] mt-4 md:mt-0">
          <p className="text-white font-sans text-[18px]">Endereço:</p>
          <p className="pl-4">R. Pastor George Weger, 120 - Centro</p>
          <p className="pl-4">Canoinhas - SC, 89460-144</p>
        </div>
      </div>
    </div>
  );
}