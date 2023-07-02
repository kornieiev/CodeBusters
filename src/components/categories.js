import Notiflix from "notiflix";
import axios from "axios";
import {getBooksByCategory} from '../api/index'

const baseUrl = 'https://books-backend.p.goit.global/books';

function fetchCategories() {
  axios.get(`${baseUrl}/category-list`)
    .then(response => {
      const categories = response.data;
      const categoriesContainer = document.getElementById('categories-container');
      const categoryRow = document.createElement('div');
      categoryRow.classList.add('category-row');

      categories.forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.innerText = category.list_name;
        categoryButton.addEventListener('click', () => fetchBooksByCategory(category.list_name));
        categoryRow.appendChild(categoryButton);
      });

      categoriesContainer.appendChild(categoryRow);
    })
    .catch(error => {
      Notiflix.Notify.failure('Помилка при отриманні категорій книг');
    });
}

function fetchBooksByCategory(category) {
  const booksContainer = document.getElementById('books-container');
  booksContainer.innerHTML = '';

  axios.get(`${baseUrl}/category?category=${category}`)
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
      console.error('Помилка при отриманні книг:', error);
    });
}

fetchCategories();