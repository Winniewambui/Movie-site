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
  searchValue = searchInput.value.toLowerCase(); 

//   const selectedGenre = languageSelect.value;
//   displayMovies(selectedGenre);
// });
Array.from(popularMoviesContainer.getElementsByClassName("movie")).forEach(function (movie) {
const title = movie.querySelector(".title").textContent.toLowerCase();
if (title.includes(searchValue)) {
  movie.style.display = "block";
} else {
  movie.style.display = "none";
}
});
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
               // This function takes a genre as its argument and displays a list of movies of that genre.
  const popularMoviesContainer = document.querySelector(".popular-movies");
  popularMoviesContainer.innerHTML = ""; // Clear previous movie list
              // This line gets the .popular-movies container element and clears its contents. 
              // This is done so that the list of movies is displayed fresh each time the function is called

  // Filter movies based on the selected genre and search value
  let filteredMovies = moviesData

  if (searchValue !== "") {
    filteredMovies = moviesData.filter(function(movie) {
      return movie.title.toLowerCase().includes(searchValue);
    }); 
  } 
  filteredMovies = genre === "all" ? moviesData : moviesData.filter((movie) => movie.category === genre);
                    // This code filters the movies based on the selected genre and search value. 
                   // If the search value is not empty, the moviesData array is filtered using the filter() method to return, 
                  //  only the movies whose titles contain the search value. 
                  // Otherwise, the genre variable is checked to see if it is equal to the string "all". 
                 // If it is, the moviesData array is returned. 
                // Otherwise, the moviesData array is filtered using the filter() method to return, only
                //  the movies whose category property is equal to the value of the genre variable


  // Generate HTML elements for each movie
  filteredMovies.forEach((movie) => {
    const movieElement = createMovieElement(movie);
    popularMoviesContainer.innerHTML += movieElement;
  });
}
              // This code iterates through the filtered movies and generates an HTML element for each one.
              // The HTML element is created using the createMovieElement() function. 
              // The generated HTML elements are then added to the popularMoviesContainer element.


// Event listener for genre selection
const languageSelect = document.getElementById("language");
languageSelect.addEventListener("change", function () {
  const selectedGenre = this.value;
  displayMovies(selectedGenre);
});
             // This code adds an event listener to the languageSelect element. 
            //  The event listener listens for the change event. 
            //  When the change event occurs, the selectedGenre variable is set to the value of the languageSelect element. 
            //  The displayMovies() function is then called with the selectedGenre variable as its argument.


// Initially display all movies
displayMovies("all");

// This line calls the displayMovies() function with the string "all" as its argument.
//  This displays a list of all the movies.


// SEE ALL BUTTON
function toggledisplayMovies() {
  const movieSections = document.querySelectorAll(".movie-category");

  movieSections.forEach((section) => {
    section.style.display = "block";
    section.querySelector("div").classList.add("flex-wrap");
  });
}
//SEEALL BUTTON
// let seeAllBtn; 
// seeAllBtn.addEventListener('click', function toggleseeAllBtn() {
//    displayMovies = genre === 'all';

//   displayMovies.forEach(movie => {
//     movie .style.display = 'block';
//     movie .querySelector('div').classList.add('flex-wrap');
//   });
// });