import './index.html';
// add before
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { slidersInit } from './modules/sliders';
import { videoBackgroundInit } from './modules/videobackground';
import { controlMenu } from './modules/menukontrol';
import { locationHover } from './modules/locationHover';


// ese here
controlMenu();
videoBackgroundInit();
locationHover();

const sliderItem = document.querySelectorAll('.career__image-item');
sliderItem.forEach((slide, i) => {
   slide.classList.add(`career__image-item_${i % 2 ? 'even' : 'odd'}`)
});

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
      600: {
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

