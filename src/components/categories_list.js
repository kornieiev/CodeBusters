import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCategoriesList } from '../api/index';

const categoriesListEl = document.querySelector('.categories-list');

onPageLoad();

async function onPageLoad() {
  try {
    const response = await fetchCategoriesList();

    renderCategoriesList(response);
  } catch (error) {
    // errorMessage();
    console.error(error);
  }
}

function renderCategoriesList(data) {
  const categoriesListMarkup = data
    .map(category => createCategoriesListMarkup(category.list_name))
    .sort()
    .join('');

  categoriesListEl.insertAdjacentHTML('beforeend', categoriesListMarkup);
}

function createCategoriesListMarkup(list_name) {
  return `
    <li class="categories-item">
      <a class="categories-list-link" href="#">${list_name}</a>
    </li>`;
}
