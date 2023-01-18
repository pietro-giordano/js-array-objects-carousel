const images = [
      {
            image: 'img/01.webp',
            title: 'Marvel\'s Spiderman Miles Morales',
            text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
      }, {
            image: 'img/02.webp',
            title: 'Ratchet & Clank: Rift Apart',
            text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
      }, {
            image: 'img/03.webp',
            title: 'Fortnite',
            text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
      }, {
            image: 'img/04.webp',
            title: 'Stray',
            text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
      }, {
            image: 'img/05.webp',
            title: "Marvel's Avengers",
            text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
      }
];

createSlide(images);
createThumbnails(images);

const allSlides = document.querySelectorAll('.slide');
allSlides[0].classList.add('selected');

const allThumb = document.querySelectorAll('.t-slide');
allThumb[0].classList.add('t-selected');

const overlay = document.querySelectorAll('.t-over');
overlay[0].classList.add('t-none');

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
let current = 0;

const invert = document.getElementById('invert');
const playStop = document.getElementById('playStop');
let position = 0;

let forward = setInterval(nextSlide, 3000);
let backward = setInterval(previousSlide, 3000);
clearInterval(backward);
backward = false;
let state = 0;

// Per selezionare la singola thumbnail col click
allThumb.forEach((singleThumb, index) => {

      singleThumb.addEventListener('click',
      
            () => {

                  remove();
                  current = index;
                  add();

            }

      );

});

next.addEventListener('click',

      function () {

            console.log('Cliccato su next');
            
            nextSlide();
      
      }

);

previous.addEventListener('click',

      function () {

            console.log('Cliccato su previous');
            
            previousSlide();

      }

);

invert.addEventListener('click',

      function () {

            if(position == 0) {
                  
                  clearInterval(forward);
                  forward = false;
                  backward = setInterval(previousSlide, 3000);
                  position++;

            } else {

                  clearInterval(backward);
                  backward = false;
                  forward = setInterval(nextSlide, 3000);
                  position--;

            }

      }

);

playStop.addEventListener('click',

      function() {

            if(position == 0 && state == 0) {

                  clearInterval(forward);
                  forward = false;
                  state++;

            } else if (position == 0 && state != 0) {

                  forward = setInterval(nextSlide, 3000);
                  state--;

            } else if (position != 0 && state == 0) {

                  clearInterval(backward);
                  backward = false;
                  state++;

            } else if (position != 0 && state != 0) {

                  backward = setInterval(previousSlide, 3000);
                  state--;

            }

      }

);

//---------------------------------------------------------------------------------------------------------------

function createSlide(arr) {

      for (let i = 0; i < arr.length; i++) {

            document.querySelector('.carousel').innerHTML += `
                  <div class="slide">
                        <img src="${arr[i].image}">
                        <div class="description">
                              <h3>${arr[i].title}</h3>
                              <p>${arr[i].text}</p>
                        </div>
                  </div>
            `;

      }

}

function createThumbnails(arr) {

      for (let i = 0; i < arr.length; i++) {

            document.querySelector('.thumbnails').innerHTML += `
                  <div class="t-slide">
                        <img src="${arr[i].image}">
                        <div class="t-over"></div>
                  </div>
            `;

      }

}

function remove() {

      allSlides[current].classList.remove('selected');
      allThumb[current].classList.remove('t-selected');
      overlay[current].classList.remove('t-none');

}

function add() {

      allSlides[current].classList.add('selected');
      allThumb[current].classList.add('t-selected');
      overlay[current].classList.add('t-none');

}

function nextSlide() {

      remove();

      if (current == allSlides.length - 1) {

            current = 0;
            add();

      } else {

            current++;
            add();

      }

}

function previousSlide() {

      remove();

      if (current == 0) {

            current = allSlides.length - 1;
            add();

      } else {

            current--;
            add();

      }

}