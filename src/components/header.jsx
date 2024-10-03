import { FacebookLogo, InstagramLogo} from "@phosphor-icons/react";

import renderLogo from '../assets/logo/amigaoLogoVertical.png';

export function Header() {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center bg-white pb-16">
          {/* Redes Sociais */}
          <div className="w-full h-[42px] flex flex-row items-center justify-end gap-6 px-10 mt-4">
            <a
              href="https://www.facebook.com/profile.php?id=100068341794040"
              target="_blank"
              className="transition-transform transform hover:scale-110"
            >
              <FacebookLogo size={28} className="text-red-dark hover:text-orange-dark" />
            </a>
            <a
              href="https://www.instagram.com/distribuidora_do_amigao/"
              target="_blank"
              className="transition-transform transform hover:scale-110"
            >
              <InstagramLogo size={28} className="text-red-dark hover:text-orange-dark" />
            </a>
          </div>
      
          {/* Logo */}
          <div className="h-auto flex items-center justify-center mt-6">
            <img
              src={renderLogo}
              alt="Logo da empresa, carrinho de compras seguido do nome da empresa, com determinada paleta de cores."
              className="w-80 md:w-96 object-contain"
            />
          </div>
      
          {/* Menu de Navegação */}
          <div className="w-[85%] h-auto flex flex-row items-center justify-center mt-8">
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
              <a
                href="#header"
                className="font-sans text-black font-semibold text-[20px] hover:text-red-dark transition-all"
              >
                Início
              </a>
              <a
                href="#marcas"
                className="font-sans text-black font-semibold text-[20px] hover:text-red-dark transition-all"
              >
                Nossas Marcas
              </a>
              <a
                href="#history"
                className="font-sans text-black font-semibold text-[20px] hover:text-red-dark transition-all"
              >
                Amigão
              </a>
              <a
                href="#cities"
                className="font-sans text-black font-semibold text-[20px] hover:text-red-dark transition-all"
              >
                Cidades de Atendimento
              </a>
              <a
                href="#contact"
                className="font-sans text-black font-semibold text-[20px] hover:text-red-dark transition-all"
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      );
}