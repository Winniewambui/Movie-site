const icon = document.querySelector(".theme-mode");
const darkMode = document.querySelector(".moon");
const lightMode = document.querySelector(".sun");

darkMode.addEventListener('click', change);

function change (){
   document.body.classList.toggle('dark-mode');
   if(document.body.classList.contains('.dark-mode')){
      document.body.classList.remove ('.dark-mode');
      lightMode.style.visiblity = 'visible';
    
     
} else {
   darkMode.style.visiblity = 'visible';
   lightMode.style.visiblity = 'invisible';
   document.body.classList.add('.dark-mode');
 }
}
// function change() {
//    document.body.classList.toggle('dark-mode');
//    if (document.body.classList.contains('dark-mode')) {
//      darkMode.style.display = "none";
//      lightMode.style.display = "block";
//    } else {
//      darkMode.style.display = "block";
//      lightMode.style.display = "none";
//    }
//  }



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
    if (genreContents.style.display === "none"){
      genreContents.style.display = "block";
    } else {
      genreContents.style.display = "none";
    }
   }





