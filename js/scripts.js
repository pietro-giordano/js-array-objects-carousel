/*
1. Creare array contenente le immagini 
2. Inserire gli elementi nell'html in base al numero di elementi nell'array
3. Rendere visibile tramite classe apposita solo la prima immagine mentre le altre sono nascoste
4. Scrivere funzione che al click sulle frecce cambi l'immagine 
*/
const images = [
      "img/01.webp",
      "img/02.webp",
      "img/03.webp",
      "img/04.webp",
      "img/05.webp"
];

const carouselSlide = document.querySelector('.carousel');

for (let i = 0; i < images.length; i++) {

      console.log(images[i]);
      carouselSlide.innerHTML += `<div class="slide"><img src="${images[i]}"></div>`;
      document.querySelector('.thumbnails').innerHTML += `<div class="t-slide"><img src="${images[i]}"><div class="t-over"></div></div>`;

}

const allSlides = document.querySelectorAll('.slide');
console.log(allSlides);
allSlides[0].classList.add('selected');

const allThumb = document.querySelectorAll('.t-slide');
console.log(allThumb);
allThumb[0].classList.add('t-selected');

const overlay = document.querySelectorAll('.t-over');
overlay[0].classList.add('t-none');

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
let current = 0;

next.addEventListener('click',

      function () {

            console.log('Cliccato su next');
            allSlides[current].classList.remove('selected');
            allThumb[current].classList.remove('t-selected');
            overlay[current].classList.remove('t-none');
            
            if (current == allSlides.length - 1) {
                  
                  current = 0;
                  allSlides[current].classList.add('selected');
                  allThumb[current].classList.add('t-selected');
                  overlay[current].classList.add('t-none');
      
            } else {

                  current++;
                  allSlides[current].classList.add('selected');
                  allThumb[current].classList.add('t-selected');
                  overlay[current].classList.add('t-none');

            }
      
      }

);

previous.addEventListener('click',

      function () {

            console.log('Cliccato su previous');
            allSlides[current].classList.remove('selected');
            allThumb[current].classList.remove('t-selected');
            overlay[current].classList.remove('t-none');

            if (current == 0) {

                  current = allSlides.length - 1;
                  allSlides[current].classList.add('selected');
                  allThumb[current].classList.add('t-selected');
                  overlay[current].classList.add('t-none');

            } else {

                  current--;
                  allSlides[current].classList.add('selected');
                  allThumb[current].classList.add('t-selected');
                  overlay[current].classList.add('t-none');

            }

      }

);