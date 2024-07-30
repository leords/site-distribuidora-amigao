import React from "react";

import renderBeer1 from '../assets/logo/beer/antarctica.png';
import renderBeer2 from '../assets/logo/beer/brahma.png';
import renderBeer3 from '../assets/logo/beer/heineken.png';
import renderBeer4 from '../assets/logo/beer/kaiser.png';
import renderBeer5 from '../assets/logo/beer/original.jpeg';
import renderBeer6 from '../assets/logo/beer/skol.png';
import renderBeer7 from '../assets/logo/beer/spoller.png';

import renderSoda1 from '../assets/logo/soda/aguadaserra.png';
import renderSoda2 from '../assets/logo/soda/coca.png';
import renderSoda3 from '../assets/logo/soda/fanta.png';
import renderSoda4 from '../assets/logo/soda/guarana.png';
import renderSoda5 from '../assets/logo/soda/pepsi.png';
import renderSoda6 from '../assets/logo/soda/sprite.png';

import renderWater1 from '../assets/logo/water/catarinense.png';


export class CompanyHistory {
    history = {
        description: 'Compartilhando uma jornada de amizade e comprometimento, a Amigão Distribuidora de Bebidas, localizada em Canoinhas - SC e região, surgiu como um projeto entre amigos apaixonados pelo mundo das bebidas. Fundada em um espírito de parceria e camaradagem, nossa empresa tem como objetivo principal criar um ambiente amigável e acolhedor tanto para nossos colaboradores quanto para nossos clientes. Nossa trajetória se baseia na experiência e no conhecimento de nossos fundadores, que já tinham uma sólida presença no mercado de bebidas. Ao unir nossas forças, buscamos não apenas expandir nosso negócio, mas também criar uma marca que representa qualidade, confiabilidade e, claro, amizade. Nosso compromisso é crescer e evoluir constantemente, estabelecendo relações sólidas com nossos clientes e fornecedores. Acreditamos que, à medida que aumentamos nossa base de clientes e parceiros, estamos construindo uma rede de amizades que durará por muitos anos. Queremos que o nome "Amigão" seja sinônimo de excelência e amizade em todos os nossos atendimentos. Estamos focados em oferecer produtos de alta qualidade, um serviço excepcional e, mais do que tudo, construir relacionamentos duradouros. A Amigão Distribuidora de Bebidas está comprometida em ser a sua escolha de confiança no mundo das bebidas, e estamos ansiosos para continuar nossa jornada ao seu lado, tornando cada momento especial, refrescante e, acima de tudo, amigável.'
        }
    }


export class Clouds {
    constructor() {
        this.cloud = {
            firstBeer: {
                img: renderBeer2
            },
            secondtBeer: {
                img: renderBeer6
            },
            thirdtBeer: {
                img: renderBeer1
            },
            fourthtBeer: {
                img: renderBeer4
            },
            fifthtBeer: {
                img: renderBeer3
            },
            sixthtBeer: {
                img: renderBeer7
            },
            seventhtBeer: {
                img: renderBeer5
            },

            firstSoda: {
                img: renderSoda2
            },
            secondSoda: {
                img: renderSoda4
            },
            thirdSoda: {
                img: renderSoda5
            },
            fourthSoda: {
                img: renderSoda6
            },
            fifthSoda: {
                img: renderSoda1
            },
            fifthSoda: {
                img: renderSoda3
            },

            firstWater: {
                img: renderWater1
            }
        }
    }
}
    

export class Information {
    constructor() {
        this.date = {
            address: 'R. Pastor George Weger',
            number: 120,
            neighborhood: 'Centro',
            city: 'Canoinhas',
            state: 'Santa Catarina',
            cep: 89460-144,
            dev: 'Leonardo Rodrigues'
        }
    }
}

export class Contact {
    constructor() {
        this.socialNetwork ={
            fone: '(47) 3622-4126',
            instagram: '',
            whatsapp: '',
            facebook: '',
            github: 'https://github.com/leords'
        }
    }
}