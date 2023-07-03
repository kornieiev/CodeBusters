import { Notify } from 'notiflix';
import { fetchCategoriesList, getBooksByCategory } from '../api/index';

const categoriesListEl = document.querySelector('.categories-list');
const categoryEl = document.querySelector('.category');

categoriesListEl.addEventListener('click', onCategoryClick);

let selectedCategoryName = '';

async function onCategoryClick(e) {
  e.preventDefault();

  const clickedCategoryLink = e.target;

  if (clickedCategoryLink.classList.contains('categories-list-link')) {
    selectedCategoryName = clickedCategoryLink.textContent;
  } else {
    return;
  }

  updateActiveCategory(clickedCategoryLink);
}

function updateActiveCategory(clickedLink) {
  const categoriesItems = categoriesListEl.querySelectorAll('.categories-item');

  categoriesItems.forEach(item => item.classList.remove('active'));
  clickedLink.parentNode.classList.add('active');
}


