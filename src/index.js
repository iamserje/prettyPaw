import './index.html';
// add before
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { slidersInit } from './modules/sliders';


// ese here

slidersInit('.about__slider', {
   pagination: {
      el: '.about__slider-pagination'
   }
});

slidersInit('.career__slider', {
   pagination: {
      el: '.career__slider-pagination'
   },
   breakpoints: {
      768: {
         slidesPerView: 'auto',
         spaceBetween: 22,
         pagination: false,
      },
      1024: {
         slidesPerView: 'auto',
         spaceBetween: 26,
         pagination: false,
      },
      1240: {
         slidesPerView: 'auto',
         spaceBetween: 30,
         pagination: false,
      }
   }
});


const videoBg = document.querySelectorAll('.video-bg');

videoBg.forEach(block => {
   block.innerHTML = `
   <source src="video/nice-nature.webm" type="video/webm">
   <source src="video/nice-nature.mp4" type="video/mp4">
`;
});
