import './style.css'

import Alpine from 'alpinejs'
import {sofas} from './sofas'
import {Swiper, Autoplay, EffectCoverflow, EffectCards, Navigation} from 'swiper'
import './swiper-bundle.min.css'
import './autoplay.min.css'
import './effect-cards.min.css'

import AOS from 'aos'
import './aos.css'



window.Alpine = Alpine



document.addEventListener('alpine:init', () => {
    Alpine.store('products', sofas)
})

Alpine.start()

// swiper js
Swiper.use([Autoplay, EffectCoverflow, EffectCards, Navigation])

const swiper = new Swiper('.swiper',{
    autoplay: {
        delay: 2500,
        disableOnInteraction: true
    },
    effect: 'cards',
    grabCursor: true,
    slidesPerView: '1',
    speed: 500,
    loop: true,
    // coverflowEffect: {
    //     rotate: 50,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 1,
    //     slideShadows: true,
    // },
    // direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true
    },
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
    navigation:{
        nextEl: '.swiper-button-next ',
        prevEl: '.swiper-button-prev '
    } 
})

// darkMode
// if ( localStorage.theme === 'dark' ){
//     document.querySelector('html').classList.add('dark')
// }else{
//     document.querySelector('html').classList.remove('dark')
// }
// let darkBtn = document.querySelector('#darkBtn')
// function toggleDarkMode(){
//     console.log('dark')
// }
// darkBtn.addEventListener('click', toggleDarkMode)

// Aos

function aos(){
    AOS.init({
        startEvent: 'DOMContentLoaded',
        // offset: 250,
        startEvent: 'DOMContentLoaded',
    })
}
document.addEventListener('load', setTimeout(() => {
    aos()
    
}, 1000))