import './style.css'

import Alpine from 'alpinejs'
import {sofas} from './sofas'
import {Swiper, Autoplay, EffectCoverflow, EffectCards} from 'swiper'
import './swiper-bundle.min.css'
import './autoplay.min.css'
import './effect-cards.min.css'


window.Alpine = Alpine



document.addEventListener('alpine:init', () => {
    Alpine.store('products', sofas)
})

Alpine.start()

// swiper js
Swiper.use([Autoplay, EffectCoverflow, EffectCards])

const swiper = new Swiper('.swiper',{
    autoplay: {
        delay: 2500,
        disableOnInteraction: true
    },
    effect: 'cards',
    grabCursor: true,
    slidesPerView: '1',
    speed: 1000,
    loop: true,
    // coverflowEffect: {
    //     rotate: 50,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 1,
    //     slideShadows: true,
    // },
    // direction: 'vertical',
    // pagination: {
    //     el: '.swiper-pagination',
    //     dynamicBullets: true
    // },
    // breakpoints:{
    //     320: {
    //         // slidesPerView: 2,
    //         spaceBetween: 0
    //     },
    //     640: {
    //         // slidesPerView: 3,
    //         spaceBetween: 0
    //     },
    // }
    // navigation:{
    //     nextEl: '.swiper-button-next ',
    //     prevEl: '.swiper-button-prev '
    // } 
})

