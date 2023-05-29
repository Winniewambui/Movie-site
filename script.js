const searchIcon = document.querySelector('.search-icon');
const inputPlaceholder = document.querySelector('#search-input');
const questionMark = searchIcon.querySelector('i');

searchIcon.addEventListener('click', toggleSearchInput);
function toggleSearchInput (){
   inputPlaceholder.classList.toggle('show');
   questionMark.style.backgroundColor = inputPlaceholder.classList.contains('show') ? 'transparent' : '#745a5a';
};


//top notch movies
const topMovies = [
       {
          "id" :1,
          "title" :"The Great",
          "image" :"https://images.unsplash.com/photo-1598449356475-b9f71db7d847?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
      },
      {
          "id" :2,
          "title" :"The Great",
          "image" :"https://images.unsplash.com/photo-1472017454701-20a80cfeaac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8OTM0NzM5Nnx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60"
       },
       {
          "id" :3,
          "title" :"The Great",
          "image" :"https://plus.unsplash.com/premium_photo-1669868116752-acd4bc7bc6a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
       },
       {
          "id" :4,
          "title" :"The Great",
          "image" :"https://images.unsplash.com/photo-1598449356475-b9f71db7d847?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
       },
       {
         "id" :5,
         "title" :"The Great",
         "image" :"https://images.unsplash.com/photo-1598449356475-b9f71db7d847?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
     }
     
   ];

const sectionTopMovies = document.querySelector('.section-items');

const section =topMovies.map((item) => {
  return `
  <div class = "top-movies">
   <img class="item" src ="${item.image}" alt="${item.title}">
   </div>
  `;
  
});


sectionTopMovies.innerHTML =section.join("");

//imageSlider IMAGES

const slides = sectionTopMovies.getElementsByClassName("item");

function nextBtn(){
   sectionTopMovies.append(slides[0]);
}
function previousBtn(){
   sectionTopMovies.prepend(slides[slides.length - 1]);
}


//dropdown section
const DropDownBtn = document.querySelector(".genres-btn");
const genreContents = document.querySelector(".genre-dropdown-contents");

DropDownBtn.addEventListener('click', showHide );

function showHide (e){
   if (genreContents.style.visibility === "hidden"){
      genreContents.style.visibility = "visible";
    } else {
      genreContents.style.visibility = "hidden";
    }
   }


//slideshow for popular movies
const  popularMoviesData = [

   {
       "id" :1,
       "title" :"The Great",
       "content" :"TVMA + Comedy, Drama",
       "image" :"https://images.unsplash.com/photo-1556983852-43bf21186b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzOHxNcjQ5RXZoNVNrc3x8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60"
   },
   {
       "id" :1,
       "title" :"The Great",
       "content" :"TVMA + Comedy, Drama",
       "image" :"https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
   },
   {
       "id" :1,
       "title" :"The Great",
       "content" :"TVMA + Comedy, Drama",
       "image" :"https://images.unsplash.com/photo-1684913126944-85eedf61f375?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
   },
   {
      "id" :4,
      "title" :"The Great",
      "content" :"TVMA + Comedy, Drama",
      "image" :"https://images.unsplash.com/photo-1556983852-43bf21186b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzOHxNcjQ5RXZoNVNrc3x8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60"
  },
  {
   "id" :5,
   "title" :"The Great",
   "content" :"TVMA + Comedy, Drama",
   "image" :"https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
},
{
   "id" :6,
   "title" :"The Great",
   "content" :"TVMA + Comedy, Drama",
   "image" :"https://images.unsplash.com/photo-1556983852-43bf21186b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzOHxNcjQ5RXZoNVNrc3x8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60"
},
{
   "id" :7,
   "title" :"The Great",
   "content" :"TVMA + Comedy, Drama",
   "image" :"https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
},
{  
"id" :8,
"title" :"The Great",
"content" :"TVMA + Comedy, Drama",
"image" :"https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
}

]

const carousel = document.querySelector('.popular-movies-slideshow');

const popularMovies = popularMoviesData.map((item) => {
   return `
   <div class = "popular-movies">
    <img class="img-item" src ="${item.image}" alt="${item.title}">
    <h2>${item.title}</h2>
    <p>${item.content}

    </div>
   `
});

carousel.innerHTML =popularMovies.join("");

//CAROUSEL IMAGES

const carouselSlide = carousel.getElementsByClassName("img-item");

function next(){
   carousel.append(carouselSlide[0]);
}
function prev(){
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






