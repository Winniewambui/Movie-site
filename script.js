const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector("#search-input");
// const questionMark = searchIcon.querySelector('i');

searchIcon.addEventListener("click", toggleSearchInput);
function toggleSearchInput() {
  searchInput.style.display = "block";
  // questionMark.style.backgroundColor = inputPlaceholder.classList.contains('show') ? 'transparent' : '#745a5a';
};




// function showHeaderImages(){
//   const header = document.querySelector("header");
//   const headerImages = data[0].headerMoviesData;
//   const headerImagesHTML = headerImages.map((images) =>{
//     return`
//     <div class="header-images">
//     <img class="item" src="${images}" alt="${images}">
//        </div>
//       `;
//   }).join("");

//   header.innerHTML = `<header>${headerImagesHTML}</header>`;
// }

// const mainPageMovies = document.querySelector(".main-page");

// const movies = mainPageData.map((item) => {
//   return `
//   <div class = "all-movies">
//    <img class="item" src ="${item.image}" alt="${item.title}">
//    </div>
//   `;
// });

// mainPageMovies.innerHTML = movies.join("");



// Group movies by category
// const moviesByCategory = {};

// mainPageData.forEach((item) => {
//   const category = getCategoryFromTitle(item.title);
//   if (!moviesByCategory[category]) {
//     moviesByCategory[category] = [];
//   }
//   moviesByCategory[category].push(item);
// });

// // Generate HTML for each category
// for (const category in moviesByCategory) {
//   if (moviesByCategory.hasOwnProperty(category)) {
//     const movies = moviesByCategory[category];
//     const moviesHTML = movies
//       .map((item) => {
//         return `
//           <div class="all-movies">
//             <h3>${item.title}</h3>
//             <img class="item" src="${item.image}" alt="${item.title}">
//           </div>
//         `;
//       })
//       .join("");

//     // Create a section for the category
//     const sectionHTML = `
//       <section>
//         <h2>${category}</h2>
//         ${moviesHTML}
//       </section>
//     `;

//     // Append the section to the mainPageMovies container
//     mainPageMovies.innerHTML += sectionHTML;
//   }
// }

// // Function to extract category from movie title
// function getCategoryFromTitle(title) {
//   const words = title.split(" ");
//   return words.length > 0 ? words[0] : "Uncategorized";
// }



// In this code, we first create an empty object moviesByCategory to store the movies grouped by their categories.
//  Then, we iterate through each movie in mainPageData and add them to the corresponding category in moviesByCategory. 
//  Next, we generate the HTML for each category by mapping over the movies in that category and creating the necessary markup. 
// Finally, we create a section for each category and append it to the mainPageMovies container.


//top notch movies
const topMovies = [
  { "image": "./images/originals.jpg" },
  { "image": "./images/avengers.jpg" },
  { "image": "./images/merlin.jpg" },
  { "image": "./images/OVAL.jpg" },
  { "image": "./images/topgun.jpg" },
  { "image": "./images/titanic.jpg" },
  { "image": "./images/wakanda.jpg" }
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

//KIDS MOVIES
const popularMoviesData = [
  {
    "id": 1,
    "title": "Sophia The First",
    "content": "Family movies.Kids.fiction.Movie(2005)",
    "image": "./images/sofia the first.jpg",
    "category": "kidsShows"
  },
  {
    "id": 2,
    "title": "Tangled",
    "content": "Dramas.Fmily Movies.Movies Based On Books(2018)",
    "image": "./images/rapunzel.jpg",
    "category": "kidsShows"
  },
  {
    "id": 3,
    "title": "Aladdin",
    "content": "Family movies.Kids.Sci-Fi.Movie(2007)",
    "image": "./images/aladdin.jpg",
    "category": "kidsShows"
  },
  {
    "id": 4,
    "title": "Snow White",
    "content": "Family movies.Kids.fiction.Movie(2005)",
    "image": "./images/snow white.jpg",
    "category": "kidsShows"
  },
  {
    "id": 5,
    "title": "Angel Friends",
    "content": "Fantasy.Action.Violence.Movie(2022)",
    "image": "./images/angel friends.jpg",
    "category": "kidsShows"
  },

  {
    "id": 6,
    "title": "Spy x Family",
    "content": "Dramas.Action.Thriller.Movie(2005)",
    "image": "./images/spy x family.jpg",
    "category": "kidsShows"
  },
  {
    "id": 7,
    "title": "Dora",
    "content": "Comedy.Drama.Kids. Movie(2015)",
    "image": "./images/dora.jpg",
    "category": "kidsShows"
  },

  {
    "id": 8,
    "title": "Princess Cinderella",
    "content": "Family movies.Kids. sci-fi.Movie(2005)",
    "image": "./images/cinderella.jpg",
    "category": "kidsShows"
  },
];

const kidsCarousel = document.querySelector(".popular-kids-movies");

const popularMovies = popularMoviesData.map((item) => {
  return `
   <div class = "kids-movies">
    <img class="img-item" src ="${item.image}" alt="${item.title}">
    <h2 class="title">${item.title}</h2>
    <p>${item.content}</p>

    </div>
   `;
});

kidsCarousel.innerHTML = popularMovies.join("");

//filtering KIDS movies
searchInput.addEventListener("keyup", filterKidsMovies);

function filterKidsMovies(e) {
  const movieTitle = e.target.value.toLowerCase();

  Array.from(kidsCarousel.getElementsByClassName("kids-movies")).forEach(function (movie) {
    const title = movie.querySelector(".title").textContent.toLowerCase();
    if (title.includes(movieTitle)) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
}
// We select the search input element using document.getElementById("search-input").
// We attach an event listener to the search input field, listening for the keyup event.
// In the movie function, we retrieve the search value from e.target.value and convert it to lowercase.
// We iterate over each movie element in the carousel using Array.from(carousel.getElementsByClassName("popular-movies")) and apply a callback function.
// Within the callback function, we retrieve the title of each movie by querying the .title element inside the movie element and convert it to lowercase.
// We check if the title includes the movieTitle search value. If it does, we set the display style of the movie element to block to show it; otherwise, we set it to none to hide it.
// This updated code will filter the movies in the carousel based on the title as the user types in the search input field. Movies with titles matching the search value will be displayed, while others will be hidden.

const actionMoviesData = [

  {
    "id": 1,
    "title": "Vikings",
    "content": "Drama.Action.Violence",
    "image": "./images/vikings.jpg",
    "category": "actionShows"
  },
  {
    "id": 2,
    "title": "fast x",
    "content": "Drama.Action.Violence",
    "image": "./images/fast x.jpg",
    "category": "kidsShows"
  },
  {
    "id": 3,
    "title": "demon slayer",
    "content": "Action.Thriller.Sci-Fi.Violence",
    "image": "./images/demon slayer.jpg",
    "category": "kidsShows"
  },
  {
    "id": 4,
    "title": "Black Panther",
    "content": "Action.Thriller.Sci-Fi.Violence",
    "image": "./images/wakanda.jpg",
    "category": "kidsShows"
  }
]

const actionCarousel = document.querySelector(".popular-action-movies");

const actionMovies = actionMoviesData.map((item) => {
  return `
  <div class = "action-movies">
    <img class="" src="${item.image}" alt="${item.title}">
    <h2 class="title">${item.title}</h2>
    <p>${item.content}</p>

    </div>
  `;
});

actionCarousel.innerHTML = actionMovies.join("");

// filtering ACTION movies
searchInput.addEventListener("keyup", filterActionMovies);

function filterActionMovies(e) {
  const movieTitle = e.target.value.toLowerCase();

  Array.from(actionCarousel.getElementsByClassName("action-movies")).forEach(function (movie) {
    const title = movie.querySelector(".title").textContent.toLowerCase();
    if (title.includes(movieTitle)) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
}

const dramaMoviesData = [
  {
    "id": 1,
    "title": "I can do it all by myself",
    "content": "Drama.Suspense.Romance",
    "image": "./images/all by myself.jpg",
    "category": "dramaShows"
  },
  {
    "id": 2,
    "title": "Madea",
    "content": "Drama.Family.Comedy",
    "image": "./images/madea.jpg",
    "category": "dramaShows"
  },
  {
    "id": 3,
    "title": "Oval",
    "content": "Drama.Romance.Suspense",
    "image": "./images/oval-drama.jpg",
    "category": "dramaShows"
  },
  {
    "id": 4,
    "title": "ruthless",
    "content": "Drama.Thriller.Mysterious",
    "image": "./images/ruthless.jpg",
    "category": "dramaShows"
  },
]

const dramaCarousel = document.querySelector(".popular-drama-movies");

const dramaMovies = dramaMoviesData.map((item) => {
  return `
  <div class = "drama-movies">
    <img class="" src="${item.image}" alt="${item.title}">
    <h2 class="title">${item.title}</h2>
    <p>${item.content}</p>

    </div>
  `;
});

dramaCarousel.innerHTML = dramaMovies.join("");

// filtering ACTION movies
searchInput.addEventListener("keyup", filterDramaMovies);

function filterDramaMovies(e) {
  const movieTitle = e.target.value.toLowerCase();

  Array.from(dramaCarousel.getElementsByClassName("drama-movies")).forEach(function (movie) {
    const title = movie.querySelector(".title").textContent.toLowerCase();
    if (title.includes(movieTitle)) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
}

//dropdown section

const movieSections = document.querySelector('.movie-category');

const genreBtn = document.querySelector('.genres-btn');
const genreDropdown = document.querySelector('.genre-dropdown-contents');

genreBtn.addEventListener('click', toggleGenreDropdown);

function toggleGenreDropdown() {
  if (genreDropdown.style.visibility === 'hidden') {
    genreDropdown.style.visibility = 'visible';
  } else {
    genreDropdown.style.visibility = 'hidden';
  }
}

const genreLinks = genreDropdown.getElementsByTagName('a');
for (const link of genreLinks) {
  link.addEventListener('click', filterMoviesByGenre);
}

function filterMoviesByGenre(event) {
  event.preventDefault();
  const genre = event.target.textContent.toLowerCase();
  const movieSections = document.querySelectorAll('.movie-category > div');

  movieSections.forEach(section => {
    const category = section.previousElementSibling.textContent.toLowerCase();
    if (category === genre) {
      section.style.display = 'grid';
      section.style.gridTemplateColumns = 'repeat(4, 1fr)';
      section.classList.add('flex-wrap');
    } else {
      section.style.display = 'none';
      section.classList.remove('flex-wrap');
    }
  });
}
//SEEALL BUTTON
function toggleMovieSections() {
  const movieSections = document.querySelectorAll('.movie-category');

  movieSections.forEach(section => {
    section.style.display = 'block';
    section.querySelector('div').classList.add('flex-wrap');
  });
}

const seeAllButton = document.querySelector('.seeAll-btn');
seeAllButton.addEventListener('click', toggleMovieSections);

// DARK & LIGHT MODE
const icon = document.querySelector(".theme-icon");
const darkMode = document.querySelector(".moon");
const lightMode = document.querySelector(".sun");

icon.addEventListener("click", change);

function change() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkMode.style.visibility = "invisible";
    lightMode.style.visibility = "visible";
  } else {
    darkMode.style.visibility = "visible";
    lightMode.style.visibility = "invisible";
  }
}
