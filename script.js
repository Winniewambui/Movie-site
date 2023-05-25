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
   ]

const sectionTopMovies = document.querySelector('.section-items');

const section =topMovies.map((item) => {
  return `
  <div class = "top-movies">
   <img class="" src ="${item.image}" alt="${item.title}">
   </div>
  `
});

sectionTopMovies.innerHTML =section.join("");


//imageSlider IMAGES
const imageSlider = document.querySelector(".section-items");
// const firstImage = document.querySelector(".popular-movies-slideshow img");
const slides = document.querySelectorAll(".section-items img")

const previousBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");
let slide = 0;
const totalSlides = slides.length;

  // If it's the last slide, reset to 0, else +1
nextBtn.addEventListener("click", () =>{
   if (slide === totalSlides - 1) {
     slide = 0;
   }
   else{
      slide ++;
   }
   updateSlide();
   // firstImage.style.display = "none";
   // otherImages[position].style.display = "block";
});
 // If it's the first slide, set as the last slide, else -1
  previousBtn.addEventListener("click", () =>{
      if (slide === 0) {
         slide = totalSlides - 1; // move to the last slide
     } else {
         // move back one
         slide --;

   };   
   updateSlide();
   // firstImage.style.display = "none";
   // otherImages[position].style.display = "block";
});
function updateSlide() {
   imageSlider.style.transform = `translateX(-${slide * 25}%)`;
 }
//  imageSlider.style.display = "flex";
//  imageSlider.style.flexWrap = "wrap";



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

const movies = document.querySelector('.popular-movies-slideshow');

const popularMovies = popularMoviesData.map((item) => {
   return `
   <div class = "popular-movies">
    <img class="" src ="${item.image}" alt="${item.title}">
    <h2>${item.title}</h2>
    <p>${item.content}

    </div>
   `
});

movies.innerHTML =popularMovies.join("");

//CAROUSEL IMAGES
const carousel = document.querySelector(".popular-movies-slideshow");
// const firstImage = document.querySelector(".popular-movies-slideshow img");
const carouselSlide = document.querySelectorAll(".popular-movies-slideshow img")

const prevButton = document.querySelector("#carousel-prev-btn");
const nextButton = document.querySelector("#carousel-next-btn");
let position = 0;
const numberOfSlides = carouselSlide.length;

  // If it's the last slide, reset to 0, else +1
nextButton.addEventListener("click", () =>{
   if (position === numberOfSlides - 1) {
      position = 0;
   }
   else{
      position ++;
   }
   updateSlide();
   // firstImage.style.display = "none";
   // otherImages[position].style.display = "block";
});
 // If it's the first slide, set as the last slide, else -1
   prevButton.addEventListener("click", () =>{
      if (position === 0) {
         position = numberOfSlides - 1; // move to the last slide
     } else {
         // move back one
         position --;

   };   
   updateSlide();
   // firstImage.style.display = "none";
   // otherImages[position].style.display = "block";
});
function updateSlide() {
   carousel.style.transform = `translateX(-${position * 25}%)`;
 }
// carousel.style.display = "flex";
// carousel.style.flexWrap = "wrap";

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










//DARK & LIGHT MODE
const icon = document.querySelector(".theme-icon");
const darkMode = document.querySelector(".moon");
const lightMode = document.querySelector(".sun");

icon.addEventListener('click', change);

function change (){

   document.body.classList.toggle('dark-mode');

   if(document.body.classList.contains('dark-mode')){
      darkMode.style.visiblity = 'invisible';
      lightMode.style.visiblity = 'visible';
   
       } else {
          darkMode.style.visiblity = 'visible';
          lightMode.style.visiblity = 'invisible';
 
 }
}






