import { Notify } from 'notiflix';
import { getBooksByCategory } from '../api/index';

const bestSellersEl = document.querySelector('.best-sellers');
const bestSellersItemsEl = bestSellersEl.querySelectorAll('.bestsellers-list-item');

bestSellersItemsEl.forEach(item => {
  const button = item.querySelector('.bestsellers-button');
  button.addEventListener('click', () => {
    const categoryName = item.querySelector('.bestsellers-item-name').textContent;
    showMoreBooks(categoryName);
  });
})