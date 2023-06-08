const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector("#search-input");
// const questionMark = searchIcon.querySelector('i');

searchIcon.addEventListener("click", toggleSearchInput);
function toggleSearchInput() {
  searchInput.style.display = "block";
  // questionMark.style.backgroundColor = inputPlaceholder.classList.contains('show') ? 'transparent' : '#745a5a';
}


const data = [
  {
    "headerMoviesData": [
      "./originals.jpg",
      "./avengers.jpg",
      "./merlin.jpg",
      "./OVAL.jpg",
      "./topgun.jpg",
      "./titanic.jpg",
      "./wakanda.jpg"
    ]
  },
  {
    "kidsMoviesData": [
      {
        "id": 9,
        "title": "Sophia The First",
        "content": "Family movies.Kids.fiction.Movie(2005)",
        "image": "./sofia the first.jpg"
      },
      {
        "id": 10,
        "title": "Tangled",
        "content": "Dramas.Family Movies.Movies Based On Books(2018)",
        "image": "./rapunzel.jpg"
      },
      {
        "id": 11,
        "title": "Aladdin",
        "content": "Family movies.Kids.Sci-Fi.Movie(2007)",
        "image": "./aladdin.jpg"
      },
      {
        "id": 12,
        "title": "Snow White",
        "content": "Family movies.Kids.fiction.Movie(2005)",
        "image": "./snow white.jpg"
      },
      {
        "id": 13,
        "title": "Angel Friends",
        "content": "Fantasy.Action.Violence.Movie(2022)",
        "image": "./angel friends.jpg"
      },
      {
        "id": 14,
        "title": "Spy x Family",
        "content": "Dramas.Action.Thriller.Movie(2005)",
        "image": "./spy x family.jpg"
      },
      {
        "id": 15,
        "title": "Dora",
        "content": "Comedy.Drama.Kids. Movie(2015)",
        "image": "./dora.jpg"
      },
      {
        "id": 16,
        "title": "Princess Cinderella",
        "content": "Family movies.Kids. sci-fi.Movie(2005)",
        "image": "./cinderella.jpg"
      }
    ]
  },
  {
    "actionMoviesData": [
      {
        "id": 17,
        "title": "Vikings",
        "content": "Drama.Action.Violence",
        "image": "./vikings.jpg"
      },
      {
        "id": 18,
        "title": "fast x",
        "content": "Drama.Action.Violence",
        "image": "./fast x.jpg"
      },
      {
        "id": 19,
        "title": "demon slayer",
        "content": "Action.Thriller.Sci-Fi.Violence",
        "image": "./images/demon slayer.jpg"
      },
      {
        "id": 20,
        "title": "Black Panther",
        "content": "Action.Thriller.Sci-Fi.Violence",
        "image": "./images/wakanda.jpg"
      }
    ]
  },
  {
    "dramaMoviesData": [
      {
        "id": 1,
        "title": "I can do it all by myself",
        "content": "Drama.Suspense.Romance",
        "image": "./all by myself.jpg",
      },
      {
        "id": 2,
        "title": "Madea",
        "content": "Drama.Family.Comedy",
        "image": "./madea.jpg",
      },
      {
        "id": 3,
        "title": "Oval",
        "content": "Drama.Romance.Suspense",
        "image": "./oval-drama.jpg",
      },
      {
        "id": 4,
        "title": "ruthless",
        "content": "Drama.Thriller.Mysterious",
        "image": "./ruthless.jpg",
      },
    ]
  }

];


function showHeaderImages(){
  const header = document.querySelector("header");
  const headerImages = data[0].headerMoviesData;
  const headerImagesHTML = headerImages.map((images) =>{
    return`
    <div class="header-images">
    <img class="item" src="${images}" alt="${images}">
       </div>
      `;
  }).join("");

  header.innerHTML = `<header>${headerImagesHTML}</header>`;
}
// //top notch movies
const topMovies = [
  {
    "id": 1,
    "title": "The Originals",
    "image": "./originals.jpg",
  },
  {
    "id": 1,
    "title": "The Avengers",
    "image": "./avengers.jpg",
  },
  {
    "id": 4,
    "title": "The Merlin",
    "image": "./merlin.jpg",
  },
  {
    "id": 5,
    "title": "The Oval",
    "image": "./OVAL.jpg",
  },
  {
    "id": 6,
    "title": "Top Gun",
    "image": "./topgun.jpg",
  },
  {
    "id": 7,
    "title": "The Titanic",
    "image": "./titanic.jpg",
  },
  {
   "id": 8,
    "title": "Black Panther",
    "image": "./wakanda.jpg",
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

const MoviesData = [

  {
    "id": 1,
    "title": "Vikings",
    "content": "Drama.Action.Violence",
    "image":  "./vikings.jpg",
    "categories":"action"
  },
  {
    "id": 2,
    "title": "fast x",
    "content": "Drama.Action.Violence",
    "image":  "./fast x.jpg",
    "categories":"action"
  },
  {
    "id": 3,
    "title": "demon slayer",
    "content": "Action.Thriller.Sci-Fi.Violence",
    "image":  "./demon slayer.jpg",
    "categories":"action"
  },
  {
    "id": 4,
    "title": "Black Panther",
    "content": "Action.Thriller.Sci-Fi.Violence",
    "image":  "./wakanda.jpg",
    "categories":"action"
  },
  {
    "id": 1,
    "title": "I can do it all by myself",
    "content": "Drama.Suspense.Romance",
    "image":  "./all by myself.jpg",
    "categories":"drama"
  },
  {
    "id": 2,
    "title": "Madea",
    "content":  "Drama.Family.Comedy",
    "image":  "./madea.jpg",
    "categories":"drama"
  },
  {
    "id": 3,
    "title": "Oval",
    "content":  "Drama.Romance.Suspense",
    "image": "./oval-drama.jpg",
    "categories":"drama"
  },
  {
    "id": 4,
    "title": "ruthless",
    "content": "Drama.Thriller.Mysterious",
    "image":   "./ruthless.jpg",
    "categories":"drama"
  },
  {
    "id": 1,
    "title": "Sophia The First",
    "content": "Family movies.Kids.fiction.Movie(2005)",
    "image": "./sofia the first.jpg",
    "categories":"kids"
  },
  {
    "id": 2,
    "title": "Tangled",
    "content": "Dramas.Fmily Movies.Movies Based On Books(2018)",
    "image": "./rapunzel.jpg",
    "categories":"drama"

  },
  {
    "id": 3,
    "title": "Aladdin",
    "content": "Family movies.Kids.Sci-Fi.Movie(2007)",
    "image": "./aladdin.jpg",
    "categories":"kids"
  },
  {
    "id": 4,
    "title": "Snow White",
    "content": "Family movies.Kids.fiction.Movie(2005)",
    "image": "./snow white.jpg",
    "categories":"kids"
  },
  {
    "id": 5,
    "title": "Angel Friends",
    "content": "Fantasy.Action.Violence.Movie(2022)",
    "image": "./angel friends.jpg",
    "categories":"kids"
  },

  {
    "id": 6,
    "title": "Spy x Family",
    "content": "Dramas.Action.Thriller.Movie(2005)",
    "image": "./spy x family.jpg",
    "categories":"drama"
  },
  {
    "id": 7,
    "title": "Dora",
    "content": "Comedy.Drama.Kids. Movie(2015)",
    "image": "./dora.jpg",
    "categories":"kids"
  },

  {
    "id": 8,
    "title": "Princess Cinderella",
    "content": "Family movies.Kids. sci-fi.Movie(2005)",
    "image": "./cinderella.jpg",
    "categories":"kids"
  }
]


// Function to generate HTML for a movie
function createMovieElement(movie) {
  return `
    <div class="movie">
      <img src="${movie.image}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>${movie.content}</p>
    </div>
  `;
}

// Function to display movies based on the selected genre
function displayMovies(genre) {
  const popularMoviesContainer = document.querySelector('.popular-movies');
  popularMoviesContainer.innerHTML = ''; // Clear previous movie list

  // Filter movies based on the selected genre
  const filteredMovies = genre === 'all' ? MoviesData : MoviesData.filter(movie => movie.categories === genre);

  // Generate HTML elements for each movie
  filteredMovies.map(movie => {
    const movieElement = createMovieElement(movie);
    
    popularMoviesContainer.innerHTML += movieElement;
  });
}

// Event listener for genre selection
const languageSelect = document.getElementById('language');
languageSelect.addEventListener('change', function() {
  const selectedGenre = this.value;
  displayMovies(selectedGenre);
});

// Initially display all movies
displayMovies('all');





//SEEALL BUTTON
let seeAllBtn; 
seeAllBtn.addEventListener('click', function toggledisplayMovies() {
   displayMovies = genre === 'all';

  displayMovies.forEach(movie => {
    movie .style.display = 'block';
    movie .querySelector('div').classList.add('flex-wrap');
  });
});

// const seeAllButton = document.querySelector('.seeAll-btn');
// seeAllButton.addEventListener('click', toggleMovieSections);

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