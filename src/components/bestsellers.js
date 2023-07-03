import { getBookcard } from "./bookcard";

const categories = document.querySelectorAll(".bestsellers-item-name")
const titles = document.querySelectorAll(".bookcard-name")
const authors = document.querySelectorAll(".bookcard-author")
const images = document.querySelectorAll(".bookcard-image")

getBookcard(categories, titles, authors, images)



const upButton = document.querySelector(".bestsellers-button-up")
const header = document.querySelector(".header")
upButton.addEventListener("click", () => {
  
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
 
})
