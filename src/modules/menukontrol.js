import { gsap } from "gsap";

export const controlMenu = () => {
   const navigationButton = document.querySelector('.navigation__button');
   const navigationList = document.querySelector('.navigation__list');
   const navigationItems = document.querySelectorAll('.navigation__item');

   const timeLine = gsap.timeline({ paused: true });

   timeLine.fromTo(navigationList,
      { opacity: 0, display: 'none' },
      { opacity: 1, display: 'block' },
      );

   navigationItems.forEach((elem, i) => {
      const horiz = i % 2 ? 500 : -500;
      timeLine.from(elem, {opacity: 0, x: horiz, duration: 1}, '-=1');

   });

   const openMenu = () => {
      navigationButton.classList.add('navigation__button_active');
      timeLine.play();
   };

   const closeMenu = () => {
      timeLine.reverse();
   };

   timeLine.eventCallback('onReverseComplete', () => {
      navigationButton.classList.remove('navigation__button_active');
      navigationList.style.display = '';
   });

   navigationButton.addEventListener('click', () => {
      if (navigationButton.classList.contains('navigation__button_active')) {
         closeMenu();
      } else {
         openMenu();
      }
   });

   const checkScreenSize = (ev) => {
      if (ev.matches) {
         gsap.set(navigationList, {opacity: 1, display: 'flex'});
         navigationItems.forEach((elem, i) => {
            gsap.set(elem, {opacity: 1, x: 0});
         });
      } else {
         gsap.set(navigationList, {opacity: 0, display: 'none'});
         navigationItems.forEach((elem, i) => {
            const horiz = i % 2 ? 500 : -500;
            gsap.set(elem, {opacity: 0, x: horiz, duration: 1});
            if (navigationButton.classList.contains('navigation__button_active')) {

            timeLine.restart();
            }
         });
      }
   };
   const mediaQueryDesctop = window.matchMedia('(min-width: 1240px)');
   mediaQueryDesctop.addEventListener('change', checkScreenSize);
   checkScreenSize(mediaQueryDesctop);
};