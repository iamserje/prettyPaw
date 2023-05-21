import './index.html';
// add before
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';


// ese here

const videoBg = document.querySelector('.video-bg');
videoBg.innerHTML = `
   <source src="video/nice-nature.webm" type="video/webm">
   <source src="video/nice-nature.mp4" type="video/mp4">
`;
