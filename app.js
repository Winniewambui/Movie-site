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
};

//SEARCH INPUT FUNCTIONALITY
const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector("#search-input");
const allMovies = document.querySelectorAll(".all-movies-categories");

searchIcon.addEventListener("click", toggleSearchInput);


function toggleSearchInput() {
  searchInput.style.display = "block"
}

searchInput.addEventListener("input", handleSearch);

function handleSearch() {
  const searchValue = searchInput.value.toLowerCase();

  allMovies.forEach((movie) => {
    const title = movie.querySelector(".title").textContent.toLowerCase();

    if (title.includes(searchValue)) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
}

//top notch movies
const topMovies = [
    { "image": "./images/originals.jpg" },
    { "image": "./images/avengers.jpg" },
    { "image": "./images/merlin.jpg" },
    { "image": "./images/OVAL.jpg" },
    {"image": "./images/demon slayer.jpg"},
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
};

//ALL MOVIES

const moviesData = [
  {
    id: 1,
    title: "demon slayer",
    content: "Action.Thriller.Sci-Fi.Violence",
    image: "./images/demon slayer.jpg",
    category: "kidsShows",
  },
  {
    "id": 2,
    "title": "Sophia The First",
    "content": "Family movies.Kids.fiction.Movie(2005)",
    "image": "./images/sofia the first.jpg",
    "category": "kidsShows"
  },
  {
    "id": 3,
    "title": "Tangled",
    "content": "Dramas.Fmily Movies.Movies Based On Books(2018)",
    "image": "./images/rapunzel.jpg",
    "category": "kidsShows"
  },
  {
    "id": 4,
    "title": "Aladdin",
    "content": "Family movies.Kids.Sci-Fi.Movie(2007)",
    "image": "./images/aladdin.jpg",
    "category": "kidsShows"
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
    category: "kidsShows",
  },
  {
    "id": 7,
    "title": "Spy x Family",
    "content": "Dramas.Action.Thriller.Movie(2005)",
    "image": "./images/spy x family.jpg",
    "category": "kidsShows"
  },
  {
    "id": 8,
    "title": "Princess Cinderella",
    "content": "Family movies.Kids. sci-fi.Movie(2005)",
    "image": "./images/cinderella.jpg",
    "category": "kidsShows"
  },
  {
    "id": 9,
    "title": "Vikings",
    "content": "Drama.Action.Violence",
    "image": "./images/vikings.jpg",
    "category": "actionShows"
  },
  {
    "id": 10,
    "title": "Angel Friends",
    "content": "Fantasy.Action.Violence.Movie(2022)",
    "image": "./images/angel friends.jpg",
    "category": "kidsShows"
  },
  {
    "id": 11,
    "title": "ruthless",
    "content": "Drama.Thriller.Mysterious",
    "image": "./images/ruthless.jpg",
    "category": "dramaShows"
  },
  {
    "id": 12,
    "title": "fast x",
    "content": "Drama.Action.Violence",
    "image": "./images/fast x.jpg",
    "category": "kidsShows"
  },
  {
    "id": 13,
    "title": "Dora",
    "content": "Comedy.Drama.Kids. Movie(2015)",
    "image": "./images/dora.jpg",
    "category": "kidsShows"
  },
  {
    "id": 14,
    "title": "I can do it all by myself",
    "content": "Drama.Suspense.Romance",
    "image": "./images/all by myself.jpg",
    "category": "dramaShows"
  },
  {
    "id": 15,
    "title": "Snow White",
    "content": "Family movies.Kids.fiction.Movie(2005)",
    "image": "./images/snow white.jpg",
    "category": "kidsShows"
  },
  {
    "id": 16,
    "title": "Madea",
    "content": "Drama.Family.Comedy",
    "image": "./images/madea.jpg",
    "category": "dramaShows"
  },
];

const movies = document.querySelector(".all-movies");

const moviesCategory = moviesData.map((item) => {
  return `
  <div class = "all-movies-categories">
    <img class="" src="${item.image}" alt="${item.title}">
    <h2 class="title">${item.title}</h2>
    <p>${item.content}</p>
    <p class="category">${item.category}</p>

    </div>
  `;
});

movies.innerHTML = moviesCategory.join("");

//DROPDOWN BUTTON
const genreBtn = document.querySelector(".genres-btn");
const genreDropdown = document.querySelector(".genre-dropdown-contents");

genreBtn.addEventListener("click", toggleGenreDropdown);

function toggleGenreDropdown() {
  if (genreDropdown.style.visibility === "hidden") {
    genreDropdown.style.visibility = "visible";
  } else {
    genreDropdown.style.visibility = "hidden";
  }
}


// FILTERING MOVIES BY CATEGORIES
const genreLinks = document.querySelectorAll(".genre-dropdown-contents a");

genreLinks.forEach((link) => {
  link.addEventListener("click", filterMoviesByCategory);
});

function filterMoviesByCategory(e) {
  e.preventDefault();
  const selectedCategory = e.target.getAttribute("data-category");

  allMovies.forEach((movie) => {
    const category = movie.querySelector(".category").textContent.toLowerCase();

    if (selectedCategory === "all" || category.includes(selectedCategory)) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
}
// const genreLinks = genreDropdown.getElementsByTagName("a");
// for (const link of genreLinks) {
//   link.addEventListener("click", filterMoviesByCategory);
// }

// function filterMoviesByCategory(e) {
//   e.preventDefault();
//   const movieCategory = e.target.value.toLowerCase();

//   Array.from(movies.getElementsByClassName("all-movies")).forEach(function (
//     movie
//   ) {
//     const category = movie.querySelector(".category").textContent.toLowerCase();
//     if (category.includes(movieCategory)) {
//       movie.style.display = "block";
//     } else {
//       movie.style.display = "none";
//     }
//   });
// }
