import { fetchCategoriesList, getBooksByCategory } from '../api/index';
import { renderBooks } from '../markup/markup';

const categoriesListEl = document.querySelector('.categories-list');
const categoryNameEl = document.querySelector('.bestsellers-name-first');
const seeMoreEl = document.querySelectorAll('.bestsellers-button');

if (categoriesListEl) {
  categoriesListEl.addEventListener('click', onCategoryClick);

}

// seeMoreEl.addEventListener('click', onCategoryClick);
// let selectedCategoryName = '';

async function onCategoryClick(e) {
  const clickedCategoryLink = e.target.textContent;

  if (e.target.tagName !== 'A' || !clickedCategoryLink || clickedCategoryLink === 'All categories') {
  return;
  }
  fetchCategoriesList()
  
const clickedLink = e.target;
updateActiveCategory(clickedLink);
const booksContainer = document.querySelector('.best-sellers');
  booksContainer.innerHTML = '';
  getBooksByCategory(clickedCategoryLink)
    .then(response => {
      
     
    const booksData = response.data;
    const message = document.createElement('div');
    message.innerHTML = renderBooks({books:booksData});
    booksContainer.appendChild(message);

      
      
    })
    .catch(error => {
      console.log(error);
    });

}



function updateActiveCategory(clickedLink) {
  categoryNameEl.textContent = clickedLink.textContent;

  const categoriesItems = categoriesListEl.querySelectorAll('.categories-item');

  categoriesItems.forEach(item => item.classList.remove('active'));
  clickedLink.parentNode.classList.add('active');
}
