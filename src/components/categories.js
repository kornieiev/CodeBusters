import Notiflix from "notiflix";
import axios from "axios";
import {getCategories} from '../api/index'
import {getBooksByCategory} from '../api/index'
import { getBookcard } from "./bookcard";
import {renderBooks} from '../markup/markup'

let lastClickedButton = null;

const displayCategories = () => {
  getCategories()
    .then(response => {
      const categories = response.data;
      
      const categoryList = document.getElementById('categories-container');
      const categoryRow = document.createElement('div');
      categoryRow.classList.add('category-row');

      // Створюємо кнопку "Усі категорії"
      const allCategoriesButton = createCategoryButton('All categories', null);
      allCategoriesButton.addEventListener('click', () => handleCategoryButtonClick(allCategoriesButton, null));
      categoryRow.appendChild(allCategoriesButton);

      // Створюємо кнопки для кожної категорії
      categories.forEach(category => {
        const categoryButton = createCategoryButton(category.list_name, category.list_name);
        categoryButton.addEventListener('click', () => handleCategoryButtonClick(categoryButton, category.list_name));
        categoryRow.appendChild(categoryButton);
      });

      categoryList.appendChild(categoryRow);

      // Перевіряємо, чи не вибрано жодної категорії
      // if (!lastClickedButton) {
      //   handleCategoryButtonClick(allCategoriesButton, null);
      // }
    })
    .catch(error => {
      console.log(error);
    });
};

// Функція для створення кнопки категорії
const createCategoryButton = (text, category) => {
  const categoryButton = document.createElement('button');
  categoryButton.innerText = text;
  return categoryButton;
};

// Обробник події кліку на кнопку категорії
const handleCategoryButtonClick = (button, category) => {
  if (lastClickedButton !== button) {
    displayBooksByCategory(category);
    if (lastClickedButton) {
      lastClickedButton.classList.remove('active');
    }
    button.classList.add('active');
    lastClickedButton = button;
  } else {
    button.classList.remove('active');
    lastClickedButton = null;
  }
};

displayCategories();



const booksEl = document.querySelector('.bestsellers-name-first');
const categoriesEl = document.querySelector('.bestsellers-item-name');
const titlesEl = document.querySelectorAll(".bookcard-name")
const authorsEl = document.querySelectorAll(".bookcard-author")
const imagesEl = document.querySelectorAll(".bookcard-image")

const displayBooksByCategory = (category) => {
  console.log('hello');
console.log(categoriesEl)
  const booksContainer = document.querySelector('.best-sellers');
  booksContainer.innerHTML = '';
  
  

  
  const upButton = document.querySelector(".best-sellers")
  const header = document.querySelector(".header")
  upButton.addEventListener("click", () => {
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
   
  })
  


  getBooksByCategory(category)
    .then(response => {
      booksEl.textContent = category;
      // categoriesEl.innerHTML = '';



    //   const titles = document.querySelectorAll(".bookcard-name")
    //   const authors = document.querySelectorAll(".bookcard-author")
    //   const images = document.querySelectorAll(".bookcard-image")

    //   for (let j = 0; j < 20; j++) {
    //     const a = Math.floor(Math.random() * response.data.length);
    //     titles[j].textContent = response.data[a].title
    //     authors[j].textContent = response.data[a].author
    //     images[j].src = response.data[a].book_image
        
        
    // }

    const booksData = response.data;
    const message = document.createElement('p');
    message.innerHTML = renderBooks({books:booksData});
    booksContainer.appendChild(message);

      
      console.log(booksData)
      if (booksData.length === 0) {
        const message = document.createElement('p');
        message.innerText = 'Немає книг у цій категорії.';
        booksContainer.appendChild(message);
      } else {
        booksData.forEach(book => {
          // console.log(book);
          
          // const bookElement = document.createElement('p');
          // bookElement.innerText = book.title;
          // booksContainer.appendChild(bookElement);
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};

