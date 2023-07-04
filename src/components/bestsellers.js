import { getBookcard } from "./bookcard";
import { getBooksByCategory } from "../api";

const categories = document.querySelectorAll(".bestsellers-item-name")
const titles = document.querySelectorAll(".bookcard-name")
const authors = document.querySelectorAll(".bookcard-author")
const images = document.querySelectorAll(".bookcard-image")
const ids = document.querySelectorAll(".bookcard")

getBookcard(categories, titles, authors, images, ids)



const upButton = document.querySelector(".bestsellers-button-up")
const header = document.querySelector(".header")
upButton.addEventListener("click", () => {
  
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
 
})
const titless = document.querySelectorAll(".bookcard-names")
const authorss = document.querySelectorAll(".bookcard-authors")
const imagess = document.querySelectorAll(".bookcard-images")
const idss = document.querySelectorAll(".bookcard2")
const active = document.querySelector(".active")

console.log(active.textContent)
let category = "Hardcover Fiction";
        getBooksByCategory(category)
            .then(response => {
              const arr = response.data.map(info => info)
              for (i = 0; i < 15; i++) {
                  

                    imagess[i].src = arr[i].book_image
                    titless[i].textContent = arr[i].title
                    authorss[i].textContent = arr[i].author
                    ids[i].id = arr[i]._id

                }

            })
            .catch(error => {
                console.log(error);
            });