import renderImageDelivery from '../assets/img/delivery/delivery-img.png';
import emailjs from 'emailjs-com';

export function Delivery() {

  function sendEmail(e) {
    e.preventDefault();  // Evita o reload da página

    console.log('e.target');
  
    emailjs.sendForm('service_a65ahra', 'template_p7ui3jk', e.target, 'dUerCKe8TLS-O-SL4')
      .then((result) => {
        console.log(result.text);
        alert('Email enviado com sucesso!');
      }, (error) => {
        console.log(error.text);
        alert('Erro ao enviar o email.');
      });
  }
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center mb-20">
          <div className="w-[85%] h-auto flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-[50%] flex items-center justify-center mb-10 md:mb-0 rounded-xl">
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
              
              <form 
                className="w-full flex flex-col items-center justify-center gap-2"
                onSubmit={sendEmail}>

                  <input
                    className="w-[70%] font-[200] h-10 rounded-lg border-2 border-red-300 hover:border-red-600 focus:outline-none focus:ring-red-600 p-2 pl-4"
                    name="user_name"
                    type="text"
                    placeholder="Digite seu nome"
                  />
                  <input
                    className="w-[70%] font-[200] h-10 rounded-lg border-2 border-red-300 hover:border-red-600 focus:outline-none focus:ring-red-600 p-2 pl-4"
                    name="user_phone"
                    type="tel"
                    placeholder="Digite seu número"
                  />
                  <button 
                  type="submit"
                  className="w-[40%] h-10 rounded-md bg-red-dark hover:bg-green-500 text-white font-semibold mt-5">
                    Enviar número
                  </button>
              </form>

            </div>
          </div>
        </div>
      )
}