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


export class Clouds {
    constructor() {
        this.cloud = {
            firstBeer: {
                name: 'Brahma',
                img: renderBeer2
            },
            secondtBeer: {
                name: 'Skol',
                img: renderBeer6
            },
            thirdtBeer: {
                name: 'Antarctica',
                img: renderBeer1
            },
            fourthtBeer: {
                name: 'Kaiser',
                img: renderBeer4
            },
            fifthtBeer: {
                name: 'Heineken',
                img: renderBeer3
            },
            sixthtBeer: {
                name: 'Spoller',
                img: renderBeer7
            },
            seventhtBeer: {
                name: 'Original',
                img: renderBeer5
            },

            firstSoda: {
                name: 'Coca-Cola',
                img: renderSoda2
            },
            secondSoda: {
                name: 'Guaraná Antarctica',
                img: renderSoda4
            },
            thirdSoda: {
                name: 'Pepsi',
                img: renderSoda5
            },
            fourthSoda: {
                name: 'Sprite',
                img: renderSoda6
            },
            fifthSoda: {
                name: 'Água da Serra',
                img: renderSoda1
            },
            fifthSoda: {
                name: 'Fanta',
                img: renderSoda3
            },

            firstWater: {
                name: 'Serra Catarinense',
                img: renderWater1
            }
        }
    }
}
    



export class information {
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

export class contact {
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