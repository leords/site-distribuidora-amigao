//import { WhatsappLogo } from '@phosphor-icons/react'

import renderImageDelivery from '../assets/img/delivery/delivery-img.png';

export function Delivery() {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center mb-20">
          <div className="w-[85%] h-auto flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-[50%] flex items-center justify-center mb-10 md:mb-0 rounded-xl shadow-md">
              <img
                src={renderImageDelivery}
                alt="Amigão Delivery"
                className="w-full h-auto max-w-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-[50%] h-auto flex flex-col items-center justify-start p-6 md:p-10 lg:p-14">
              <h1 className="font-sans text-red-dark font-semibold text-2xl md:text-4xl mb-4 text-center md:text-left">
                Delivery Amigão
              </h1>
              <p className="font-sans text-black font-light text-base md:text-lg lg:text-xl text-justify mb-6">
                Nosso delivery realiza entregas em toda a parte urbana da cidade,
                garantindo um tempo de entrega rápido e com o melhor preço. Faça seu
                pedido pelo WhatsApp e tenha contato direto com um de nossos
                vendedores!
              </p>
              <p className="font-sans text-black font-light text-base md:text-lg lg:text-xl text-justify mb-6">
                Precisou? Pediu, entregou!
              </p>
              <p className="font-sans text-red-dark font-semibold text-lg text-center md:text-center mb-6">
                Para contato, deixe seu número. Entraremos em contato com você!
              </p>
              <form className="w-full max-w-xs mx-auto md:mx-0">
                <div className="relative flex flex-col md:flex-row gap-4 items-center">
                  <input
                    className="w-full md:w-56 h-10 rounded-lg border-2 border-red-300 hover:border-red-600 focus:outline-none focus:ring-red-600 p-2"
                    type="text"
                    placeholder="Digite seu número"
                  />
                  <button className="w-full md:w-20 h-10 rounded-md bg-red-600 hover:bg-red-400 text-white font-semibold">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
}