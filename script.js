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





