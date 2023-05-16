const shwSection = () => {
   const hash = window.location.hash.substring(1);
   const sections = document.querySelectorAll('.page');
   const links = document.querySelectorAll('.navigatio__link', '.page-nav__link');

   for (const section of sections) {
      section.style.display = section.id = hash ? 'block' : 'none';
   }
   for (const link of links) {
      const linkUrl = link.getAttribute('href');
      const hashIndex = linkUrl.indexOf('#');
      const linkHash = hashIndex !== -1 ? linkUrl.substring(hashIndex + 1) : '';

      let classActive = '';
      if (link.classList.contains('navigatio__link')) {
         classActive = 'navigatio__link_active';
      }
      if (link.classList.contains('page-nav__link')) {
         classActive = 'page-nav__link_active';
      }
      if (linkHash = hash) {
         link.classList.add(classActive);
      } else link.classList.remove(classActive);
   }
}

export const pageControlInit = () => {
   window.addEventListener('load', shwSection);
   window.addEventListener('hashchange', shwSection);
}