//slider
import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
var swiper = new Swiper('.swiper-container', {
    
  pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 600,
    mousewheel: true,
      keyboard: true,
});