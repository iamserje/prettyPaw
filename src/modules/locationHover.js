import { gsap } from "gsap";

export const locationHover = () => {
   const locationList = document.querySelector('.locations__list');
   const locationItem = document.querySelectorAll('.locations__item');

   const mediaQueryDesctop = window.matchMedia('(min-width: 1240px)');
   const mediaQueryLaptop = window.matchMedia('(min-width: 1024px)');

   for (const item of locationItem) {
      const content = item.querySelector('.locations__content');
      const title = item.querySelector('.locations__item-title');
      const description = item.querySelector('.locations__item-descr');

      const timeLine = gsap.timeline({ paused: true });

      timeLine.to(content, { opacity: 0, duration: 0.3 })
         .to(content, {
            transform: 'none',
            left: 0,
            bottom: 0,
            top: 'auto',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            duration: 0
         })
         .to(title, {
            whiteSpace: 'unset',
            hyphens: 'auto',
            color: '#FFAA05',
            marginBottom: mediaQueryDesctop.matches ? '4rem' : '2.4rem',
            duration: 0
         })
         .to(description, { display: 'block', duration: 0 })
         .to(content, {
            opacity: 1,
            duration: 0.3
         });
      item.addEventListener('mouseenter', () => {
         if (mediaQueryLaptop.matches) {
            timeLine.play();
            gsap.to(locationList, {
               '--background-image': `url('${item.dataset.image}')`,
               '--opacity': 1,
               duration: 1
            })
         };
      });
      item.addEventListener('mouseleave', () => {
         if (mediaQueryLaptop.matches) {
            timeLine.reverse();
            gsap.to(locationList, {
               '--opacity': 0,
               duration: 1
            })
         }
      });

      const linkPreload = document.createElement('link');
      linkPreload.rel = 'preload';
      linkPreload.href = item.dataset.image;
      linkPreload.as = 'image';

      if (mediaQueryLaptop.matches) {
         document?.head.append(linkPreload);
      };

      mediaQueryLaptop.addEventListener('change', (ev) => {
         if (!ev.matches) {
            content.style = '';
            title.style = '';
            description.style = '';
         } else {
            document?.head.append(linkPreload);
         }
      });

   }
};