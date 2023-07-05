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
  fetchCategoriesList()
  .then(response => {
    console.log(response)
  })
  // e.preventDefault();

const clickedCategoryLink = e.target.textContent;

const clickedLink = e.target;
updateActiveCategory(clickedLink);
const booksContainer = document.querySelector('.best-sellers');
  booksContainer.innerHTML = '';
  getBooksByCategory(clickedCategoryLink)
    .then(response => {
      // booksEl.textContent = category;
     
    const booksData = response.data;
    const message = document.createElement('div');
    message.innerHTML = renderBooks({books:booksData});
    booksContainer.appendChild(message);

      
      
    })
    .catch(error => {
      console.log(error);
    });

}

  // const clickedCategoryLink = e.target;

//   if (clickedCategoryLink.classList.contains('categories-list-link')) {
//     selectedCategoryName = clickedCategoryLink.textContent;

//     const bestsellersList = document.querySelector('.category-block');

//     // Видалити наявні книги
//     bestsellersList.innerHTML = '';

//     getBooksByCategory(selectedCategoryName)
//       .then(response => {
//         const books = response.data;
//         let row = document.createElement('ul');
//         row.classList.add('bestsellers-choose-list', 'list');

//         for (let i = 0; i < books.length; i++) {
//           const book = books[i];
//           const bookCard = createBookCard(book);

//           row.appendChild(bookCard);

//           // Створювати новий рядок кожні 5 книжок
//           if ((i + 1) % 5 === 0 || i === books.length - 1) {
//             bestsellersList.appendChild(row);
//             row = document.createElement('ul');
//             row.classList.add('bestsellers-choose-list', 'list');
//           }
//         }
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   } else {
//     return;
//   }

  // updateActiveCategory(clickedCategoryLink);
// }

// function createBookCard(book) {
//   const bookCard = document.createElement('li');
//   bookCard.classList.add('.choose-list-item');

//   const bookName = document.createElement('h4');
//   bookName.classList.add('bestsellers-item-name');
//   bookName.textContent = book.category;

//   bookCard.appendChild(bookName);

//   // Додати вміст карточки книги
//   const bookImage = document.createElement('img');
//   bookImage.classList.add('bookcard-image');
//   bookImage.src = book.book_image || '';
//   bookCard.appendChild(bookImage);

//   const bookTitle = document.createElement('div');
//   bookTitle.classList.add('bookcard-name');
//   bookTitle.textContent = book.title || '';
//   bookCard.appendChild(bookTitle);

//   const bookAuthor = document.createElement('div');
//   bookAuthor.classList.add('bookcard-author');
//   bookAuthor.textContent = book.author || '';
//   bookCard.appendChild(bookAuthor);

//   // Додайте решту вмісту для карточки книги за вашими потребами

//   return bookCard;
// }

function updateActiveCategory(clickedLink) {
  categoryNameEl.textContent = clickedLink.textContent;

  const categoriesItems = categoriesListEl.querySelectorAll('.categories-item');

  categoriesItems.forEach(item => item.classList.remove('active'));
  clickedLink.parentNode.classList.add('active');
}
