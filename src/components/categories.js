import Notiflix from "notiflix";
import axios from "axios";
import {getCategories} from '../api/index'
import {getBooksByCategory} from '../api/index'

const displayCategories = () => {
  getCategories()
    .then(response => {
      const categories = response.data;
      const categoryList = document.getElementById('categories-container');
      const categoryRow = document.createElement('div');
      categoryRow.classList.add('category-row');

      categories.forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.innerText = category.list_name;
        categoryButton.addEventListener('click', () => displayBooksByCategory(category.list_name));
        categoryRow.appendChild(categoryButton);
      })
      categoryList.appendChild(categoryRow);
    })
    .catch(error => {
      console.log(error);
    });
};

const displayBooksByCategory = (category) => {
  const booksContainer = document.getElementById('books-list');
  booksContainer.innerHTML = '';

  getBooksByCategory(category)
    .then(response => {
      const booksData = response.data;
      if (booksData.length === 0) {
        const message = document.createElement('p');
        message.innerText = 'Немає книг у цій категорії.';
        booksContainer.appendChild(message);
      } else {
        booksData.forEach(book => {
          const bookElement = document.createElement('p');
          bookElement.innerText = book.title;
          booksContainer.appendChild(bookElement);
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};

displayCategories();