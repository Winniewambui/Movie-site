const carousel = document.querySelector(".popular-movies-slideshow");
const carouselSlide = document.querySelectorAll(".popular-movies-slideshow img")

const prevButton = document.querySelectorAll("#carousel-prev-btn");
const nextvButton = document.querySelectorAll("#carousel-next-btn");

let currentSlide = 0;
let maxSlide = 0;

nextvButton.addEventListener("click",()=>{
   if (currentSlide === maxSlide){
    currentSlide = 0;
   }
   else{
    currentSlide ++ ;
   }
   carouselSlide .forEach((slide, index) =>{
    carouselSlide.style.transform = 
   })
})