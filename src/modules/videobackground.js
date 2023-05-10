export const videoBackgroundInit = () => {
   const videoBg = document.querySelectorAll('.video-bg');

   videoBg.forEach(block => {
      block.innerHTML = `
      <source src="video/nice-nature.webm" type="video/webm">
      <source src="video/nice-nature.mp4" type="video/mp4">
   `;
   });
};
