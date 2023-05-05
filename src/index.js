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

// slidersInit('.about__slider', {
//    pagination: {
//       el: '.about__slider-pagination'
//    },
//    breakpoints: {
//       768: {
//          slidersPerView: 2,
//          spaceBetween: 2
//       },
//       1024: {
//          slidersPerView: 3,
//          spaceBetween: 3
//       },
//       1240: {
//          slidersPerView: 4,
//          spaceBetween: 4
//       }
//    }
// });

const videoBg = document.querySelector('.video-bg');
videoBg.innerHTML = `
   <source src="video/nice-nature.webm" type="video/webm">
   <source src="video/nice-nature.mp4" type="video/mp4">
`;
