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
        description: 'A Distribuidora de Bebidas Amigão, com sede em Canoinhas - SC, nasceu do sonho de amigos apaixonados pelo universo das bebidas. Com um espírito de parceria e camaradagem, a empresa tem como missão criar um ambiente amigável e acolhedor tanto para seus colaboradores quanto para seus clientes. Fundada por pessoas com vasta experiência no setor, a Amigão visa não apenas expandir seus negócios, mas também se estabelecer como uma marca de confiança, reconhecida pela qualidade e pelo atendimento. O compromisso da empresa é crescer continuamente, mantendo fortes relações com clientes e fornecedores. A Amigão valoriza a construção de relacionamentos duradouros, acreditando que cada interação fortalece sua rede de amizades e negócios. O objetivo é que o nome "Amigão" seja sempre associado a excelência, amizade e confiança. Mais do que vender produtos, a empresa quer oferecer experiências excepcionais, tornando cada momento especial e amigável.'
    }
}

export class informationPoints {
    points = {
        clients: 620,
        products: 380,
        clouds: 51,
        orders: 68521
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