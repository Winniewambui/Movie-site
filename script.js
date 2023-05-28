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
     }, 
     {
      "id" :6,
      "title" :"The Great",
      "image" :"https://images.unsplash.com/photo-1472017454701-20a80cfeaac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8OTM0NzM5Nnx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60"
   },
   {
      "id" :7,
      "title" :"The Great",
      "image" :"https://images.unsplash.com/photo-1598449356475-b9f71db7d847?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
  },
  {
   "id" :8,
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

const searchIcon = document.querySelector('.search-icon');
const searchInputContainer = document.querySelector('.search-input-container');

searchIcon.addEventListener('click', function() {
  searchInputContainer.classList.toggle('active');
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


// const imageSlider = document.querySelector(".section-items");
// const sectionTopMovies = document.querySelector('.section-items');
// const previousBtn = document.querySelector(".prev-button");
// const nextBtn = document.querySelector(".next-button");
// let slide = 0;
// const totalSlides = slides.length;


// //   If it's the last slide, reset to 0, else +1
// nextBtn.addEventListener("click", () =>{
//    if (slide === totalSlides - 1) {
//      slide = 0;
//    }
//    else{
//       slide ++;
//    }
//    updateImage();

// });
// //  If it's the first slide, set as the last slide, else -1
//   previousBtn.addEventListener("click", () =>{
//       if (slide === 0) {
//          slide = totalSlides - 1; // move to the last slide
//      } else {
//          // move back one
//          slide --;

//    };   
//    updateImage();

// });
// function  updateImage() {
//    sectionTopMovies.style.transform = `translateX(-${slide * 100}%)`;
//  }




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

// const carousel = document.querySelector(".popular-movies-slideshow");
// const carouselParagraphs = document.querySelectorAll(".popular-movies p");
// const carouselHeadings = document.querySelectorAll(".popular-movies h2");

// const prevButton = document.querySelector("#carousel-prev-btn");
// const nextButton = document.querySelector("#carousel-next-btn");
// let position = 0;
// const numberOfSlides = carouselSlide.length;

// Hide all images except the first one
// for (let i = 4; i < carouselSlide.length; i++) {
//    carouselSlide[i].style.display = "none";
//    carouselParagraphs[i].style.display = "none";
//    carouselHeadings[i].style.display = "none";
//  }


// // Set display property of carousel container to flex and fixed height
// carousel.style.display = "flex";
// carousel.style.height = "300px"; // Adjust the height as needed

// // Adjust the width of each slide to occupy the available space evenly
// carouselSlide.forEach((slide) => {
//    slide.style.maxWidth = "300px";
//    slide.style.maxHeight = "100%";
//    slide.style.objectFit = "contain";
// });

//   // If it's the last slide, reset to 0, else +1
// nextButton.addEventListener("click", () =>{
//    if (position === numberOfSlides - 1) {
//       position = 0;
//    }
//    else{
//       position ++;
//    }; 
//    updateSlide();

//    carouselSlide[position].style.display = "block";
//    carouselParagraphs[position].style.display = "block";
//    carouselHeadings[position].style.display = "block";

// });
//  // If it's the first slide, set as the last slide, else -1
//    prevButton.addEventListener("click", () =>{
//       if (position === 0) {
//          position = numberOfSlides - 1; // move to the last slide
//      } else {
//          // move back one
//          position --;

//    };   
//    updateSlide();

//    carouselSlide[position].style.display = "block";
//    carouselParagraphs[position].style.display = "block";
//    carouselHeadings[position].style.display = "block";
// });
// function updateSlide() {
//    carousel.style.transform = `translateX(-${position * 25}%)`;
//  }


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
      darkMode.style.visibility = 'invisible';
      lightMode.style.visibility = 'visible';
   
       } else {
          darkMode.style.visibility = 'visible';
          lightMode.style.visibility = 'invisible';
 
 }
}






