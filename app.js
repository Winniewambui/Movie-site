// DARK & LIGHT MODE
const icon = document.querySelector(".theme-icon");
const darkMode = document.querySelector(".moon");
const lightMode = document.querySelector(".sun");

icon.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkMode.style.display = "none";
    lightMode.style.display = "inline";
  } else {
    darkMode.style.display = "inline";
    lightMode.style.display = "none";
  }
}
//HAMBURGER
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

//SEARCH INPUT FUNCTIONALITY
const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector("#search-input");
let searchValue;


function toggleSearchInput() {
  searchInput.style.display = "block"
}
searchIcon.addEventListener("click", toggleSearchInput);

searchInput.addEventListener("input", function() {
   searchValue = searchInput.value;

});



// Top Notch Movies
const topMovies = [
  { image: "./images/originals.jpg" },
  { image: "./images/avengers.jpg" },
  { image: "./images/merlin.jpg" },
  { image: "./images/OVAL.jpg" },
  { image: "./images/demon slayer.jpg" },
  { image: "./images/topgun.jpg" },
  { image: "./images/titanic.jpg" },
  { image: "./images/wakanda.jpg" },
];

const sectionTopMovies = document.querySelector(".section-items");

const section = topMovies.map((item) => {
  return `
    <div class="top-movies">
      <img class="item" src="${item.image}" alt="${item.title}">
    </div>
  `;
});

sectionTopMovies.innerHTML = section.join("");

// Image Slider
const slides = Array.from(sectionTopMovies.querySelectorAll(".item"));

function nextBtn() {
  sectionTopMovies.append(slides[0]);
}
function previousBtn() {
  sectionTopMovies.prepend(slides[slides.length - 1]);
}

// All Movies
const moviesData = [
  {
    id: 1,
    title: "demon slayer",
    content: "Action.Thriller.Sci-Fi.Violence",
    image: "./images/demon slayer.jpg",
    category: "actionShows",
  },
  {
    id: 2,
    title: "Sophia The First",
    content: "Family movies.Kids.fiction.Movie(2005)",
    image: "./images/sofia the first.jpg",
    category: "kidsShows",
  },
  {
    id: 3,
    title: "Tangled",
    content: "Dramas.Family Movies.Movies Based On Books(2018)",
    image: "./images/rapunzel.jpg",
    category: "kidsShows",
  },
  {
    id: 4,
    title: "Aladdin",
    content: "Family movies.Kids.Sci-Fi.Movie(2007)",
    image: "./images/aladdin.jpg",
    category: "kidsShows",
  },
  {
    id: 5,
    title: "Oval",
    content: "Drama.Romance.Suspense",
    image: "./images/oval-drama.jpg",
    category: "dramaShows",
  },
  {
    id: 6,
    title: "Black Panther",
    content: "Action.Thriller.Sci-Fi.Violence",
    image: "./images/wakanda.jpg",
    category: "actionShows",
  },
  {
    id: 7,
    title: "Spy x Family",
    content: "Dramas.Action.Thriller.Movie(2005)",
    image: "./images/spy x family.jpg",
    category: "kidsShows",
  },
  {
    id: 8,
    title: "Princess Cinderella",
    content: "Family movies.Kids.sci-fi.Movie(2005)",
    image: "./images/cinderella.jpg",
    category: "kidsShows",
  },
  {
    id: 9,
    title: "Vikings",
    content: "Drama.Action.Violence",
    image: "./images/vikings.jpg",
    category: "actionShows",
  },
  {
    id: 10,
    title: "Angel Friends",
    content: "Fantasy.Action.Violence.Movie(2022)",
    image: "./images/angel friends.jpg",
    category: "kidsShows",
  },
  {
    id: 11,
    title: "ruthless",
    content: "Drama.Thriller.Mysterious",
    image: "./images/ruthless.jpg",
    category: "dramaShows",
  },
  {
    id: 12,
    title: "fast x",
    content: "Drama.Action.Violence",
    image: "./images/fast x.jpg",
    category: "actionShows",
  },
  {
    id: 13,
    title: "Dora",
    content: "Comedy.Drama.Kids.Movie(2015)",
    image: "./images/dora.jpg",
    category: "kidsShows",
  },
  {
    id: 14,
    title: "I can do it all by myself",
    content: "Drama.Suspense.Romance",
    image: "./images/all by myself.jpg",
    category: "dramaShows",
  },
  {
    id: 15,
    title: "Snow White",
    content: "Family movies.Kids.fiction.Movie(2005)",
    image: "./images/snow white.jpg",
    category: "kidsShows",
  },
  {
    id: 16,
    title: "Madea",
    content: "Drama.Family.Comedy",
    image: "./images/madea.jpg",
    category: "dramaShows",
  },
];

// Function to generate HTML for a movie
function createMovieElement(movie) {
  return `
    <div class="movie">
      <img src="${movie.image}" alt="${movie.title}">
      <h3 class="title">${movie.title}</h3>
      <p>${movie.content}</p>
    </div>
  `;
}


// Function to display movies based on the selected genre
function displayMovies(genre) {
  const popularMoviesContainer = document.querySelector(".popular-movies");
  popularMoviesContainer.innerHTML = ""; // Clear previous movie list

  // Filter movies based on the selected genre
  let filteredMovies = moviesData

  if (searchValue !== "") {
    filteredMovies = moviesData.filter(function(movie) {
      return movie.title.toLowerCase().includes(searchValue);
    });
  }
  filteredMovies = genre === "all" ? moviesData : moviesData.filter((movie) => movie.category === genre);


  


  // Generate HTML elements for each movie
  filteredMovies.forEach((movie) => {
    const movieElement = createMovieElement(movie);
    popularMoviesContainer.innerHTML += movieElement;
  });
}

// Event listener for genre selection
const languageSelect = document.getElementById("language");
languageSelect.addEventListener("change", function () {
  const selectedGenre = this.value;
  displayMovies(selectedGenre);
});

// Initially display all movies
displayMovies("all");

// SEE ALL BUTTON
function toggleMovieSections() {
  const movieSections = document.querySelectorAll(".movie-category");

  movieSections.forEach((section) => {
    section.style.display = "block";
    section.querySelector("div").classList.add("flex-wrap");
  });
}
// const seeAllButton = document.querySelector('.seeAll-btn');
// seeAllButton.addEventListener('click', toggleMovieSections);


//DROPDOWN BUTTON
// const genreBtn = document.querySelector(".genres-btn");
// const genreDropdown = document.querySelector(".genre-dropdown-contents");

// genreBtn.addEventListener("click", toggleGenreDropdown);

// function toggleGenreDropdown() {
//   if (genreDropdown.style.visibility === "hidden") {
//     genreDropdown.style.visibility = "visible";
//   } else {
//     genreDropdown.style.visibility = "hidden";
//   }
// }
