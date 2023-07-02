import { getBooksByCategory } from "../api";
const a = document.querySelectorAll(".bestsellers-item-name")
const bookTitle = document.querySelectorAll(".bookcard-name")
const bookAuthor = document.querySelectorAll(".bookcard-author")
const image = document.querySelectorAll(".bookcard-image")


for (let i = 0; i < 4; i++) {
    let category = a[i].textContent;
    getBooksByCategory(category)
        .then(response => {
            bookTitle[i].textContent = response.data[0].title
            bookAuthor[i].textContent = response.data[0].author
            image[i].src = response.data[0].book_image
        })
    
}