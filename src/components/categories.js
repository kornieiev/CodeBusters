import Notiflix from "notiflix";
import axios from "axios";
import {getCategories} from '../api/index'
import {getBooksByCategory} from '../api/index'

let lastClickedButton = null;

const displayCategories = () => {
  getCategories()
    .then(response => {
      const categories = response.data;
      const categoryList = document.getElementById('categories-container');
      const categoryRow = document.createElement('div');
      categoryRow.classList.add('category-row');

      // Створюємо кнопку "Усі категорії"
      const allCategoriesButton = createCategoryButton('Усі категорії', null);
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
      if (!lastClickedButton) {
        handleCategoryButtonClick(allCategoriesButton, null);
      }
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
