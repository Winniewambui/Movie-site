const searchIcon = document.querySelector(".search-icon");
const inputPlaceholder = document.querySelector("#search-input");
// const questionMark = searchIcon.querySelector('i');

searchIcon.addEventListener("click", toggleSearchInput);
function toggleSearchInput() {
  inputPlaceholder.classList.toggle("show");
  // questionMark.style.backgroundColor = inputPlaceholder.classList.contains('show') ? 'transparent' : '#745a5a';
}

//top notch movies
const topMovies = [
//   {
//     id: 1,
//     title: "The Great",
//     image: "./demon slayer.jpg",
//   },
//   {
//     id: 2,
//     title: "The Great",
//     image: "./originals.jpg",
//   },
//   {
//     id: 3,
//     title: "The Great",
//     image: "./avengers.jpg",
//   },
  {
    id: 4,
    title: "The Great",
    image: "./merlin.jpg",
  },
  {
    id: 5,
    title: "The Great",
    image: "./OVAL.jpg",
  },
//   {
//     id: 6,
//     title: "The Great",
//     image: "./sistas.jpg",
//   },
  {
    id: 7,
    title: "The Great",
    image: "./topgun.jpg",
  },
  {
    id: 8,
    title: "The Great",
    image: "./titanic.jpg",
  },
  {
    id: 9,
    title: "The Great",
    image: "./wakanda.jpg",
  },
];

const sectionTopMovies = document.querySelector(".section-items");

const section = topMovies.map((item) => {
  return `
  <div class = "top-movies">
   <img class="item" src ="${item.image}" alt="${item.title}">
   </div>
  `;
});

sectionTopMovies.innerHTML = section.join("");

//imageSlider IMAGES

const slides = sectionTopMovies.getElementsByClassName("item");

function nextBtn() {
  sectionTopMovies.append(slides[0]);
}
function previousBtn() {
  sectionTopMovies.prepend(slides[slides.length - 1]);
}


//dropdown section
const DropDownBtn = document.querySelector(".genres-btn");
const genreContents = document.querySelector(".genre-dropdown-contents");

DropDownBtn.addEventListener("click", showHide);

function showHide(e) {
  if (genreContents.style.visibility === "hidden") {
    genreContents.style.visibility = "visible";
  } else {
    genreContents.style.visibility = "hidden";
  }
}

//slideshow for popular movies
const popularMoviesData = [
  {
    id: 1,
    title: "The Great",
    content: "TVMA + Comedy, Drama",
    image: "./sofia the first.jpg",
  },
  {
    id: 2,
    title: "The Great",
    content: "TVMA + Comedy, Drama",
    image: "./rapunzel.jpg",
  },
  {
    id: 3,
    title: "The Great",
    content: "TVMA + Comedy, Drama",
    image: "./aladdin.jpg",
  },
  {
    id: 4,
    title: "The Great",
    content: "TVMA + Comedy, Drama",
    image: "./snow white.jpg",
  },
  {
    id: 5,
    title: "The Great",
    content: "TVMA + Comedy, Drama",
    image: "./angel friends.jpg",
  },

  {
    id: 6,
    title: "The Great",
    content: "TVMA + Comedy, Drama",
    image: "./spy x family.jpg",
  },
  {
    id: 7,
    title: "The Great",
    content: "TVMA + Comedy, Drama",
    image: "./dora.jpg",
  },

  {
    id: 8,
    title: "The Great",
    content: "TVMA + Comedy, Drama",
    image: "./cinderella.jpg",
  },
];

const carousel = document.querySelector(".popular-movies-slideshow");

const popularMovies = popularMoviesData.map((item) => {
  return `
   <div class = "popular-movies">
    <img class="img-item" src ="${item.image}" alt="${item.title}">
    <h2>${item.title}</h2>
    <p>${item.content}

    </div>
   `;
});

carousel.innerHTML = popularMovies.join("");

//CAROUSEL IMAGES

const carouselSlide = carousel.getElementsByClassName("img-item");

function next() {
  carousel.append(carouselSlide[0]);
}
function prev() {
  carousel.prepend(carouselSlide[carouselSlide.length - 1]);
}

//DARK & LIGHT MODE
// const icon = document.querySelector(".theme-icon");
// const darkMode = document.querySelector(".moon");
// const lightMode = document.querySelector(".sun");

// icon.addEventListener('click', change);

// function change (){

//    document.body.classList.toggle('dark-mode');

//    if(document.body.classList.contains('dark-mode')){
//       darkMode.style.visibility = 'invisible';
//       lightMode.style.visibility = 'visible';

//        } else {
//           darkMode.style.visibility = 'visible';
//           lightMode.style.visibility = 'invisible';

//  }
// }
