import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

await imagemin(['src/img/page/*.{jpg,png}'], {
   destination: 'src/img/page/webp',
   plugins: [
imageminWebp({quality: 70}),
   ]
});

console.log('Convertation in webp is done.');