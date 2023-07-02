import Notiflix from "notiflix";
import axios from "axios";
import {getCategories} from '../api/index'
import {getBooksByCategory} from '../api/index'

const displayCategories = () => {
  let lastClickedButton = null;
  getCategories()
    .then(response => {
      const categories = response.data;
      const categoryList = document.getElementById('categories-container');
      const categoryRow = document.createElement('div');
      categoryRow.classList.add('category-row');

      // Створюємо кнопку "Усі категорії"
      const allCategoriesButton = document.createElement('button');
      allCategoriesButton.innerText = 'Усі категорії';
      allCategoriesButton.addEventListener('click', () => {
        if (lastClickedButton !== allCategoriesButton) {
          displayBooksByCategory(null);
          if (lastClickedButton) {
            lastClickedButton.classList.remove('active');
          }
          allCategoriesButton.classList.add('active');
          lastClickedButton = allCategoriesButton;
        } else {
          allCategoriesButton.classList.remove('active');
          lastClickedButton = null;
        }
      });
      categoryRow.appendChild(allCategoriesButton);

      // Створюємо кнопки для кожної категорії
      categories.forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.innerText = category.list_name;
        categoryButton.addEventListener('click', () => {
          if (lastClickedButton !== categoryButton) {
            displayBooksByCategory(category.list_name);
            if (lastClickedButton) {
              lastClickedButton.classList.remove('active');
            }
            categoryButton.classList.add('active');
            lastClickedButton = categoryButton;
            allCategoriesButton.classList.remove('active');
          }
        });
        categoryRow.appendChild(categoryButton);
      });

      categoryList.appendChild(categoryRow);

      if (!lastClickedButton) {
        allCategoriesButton.classList.add('active');
        lastClickedButton = allCategoriesButton;
      }
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