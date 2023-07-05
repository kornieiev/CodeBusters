import { getBookById } from '../api';
import { renderBookCard } from './render-modal-book';
import axios from 'axios';

const modalBookName = document.querySelector('.modal-book-name');
const modalAuthor = document.querySelector('.modal-author');
const modalDescription = document.querySelector('.modal-description');
const modalImage = document.querySelector('.modal-image');
const amazonImgLink = document.querySelector('.amazon-img-link');
const appleBooksImgLink = document.querySelector('.applebooks-img-link');
const bookshopImgLink = document.querySelector('.bookshop-img-link');

const bodyToScroll = document.querySelector('body');
const windowToScroll = document.querySelector('window');

const modalContainer = document.querySelector('.modal-window-container');
const bookcardForModal = document.querySelectorAll('.bookcard');
const bestSellersBtn = document.querySelector('.bestsellers-button');
const modalCloseBtn = document.querySelector('.modal-icon');
const modalOverlay = document.querySelector('.modal-overlay');
const quickView = document.querySelector('.quick-view');

const addButton = document.querySelector('.modal-add-btn');
const congratsText = document.querySelector('.congrats-text');

const bookListModal = document.querySelector('.list');
const bestListModal = document.querySelector('.bestsellers-list-second');
const bestListMobile = document.querySelector('.bestsellers-mobile');
const bestListItemModal = document.querySelector('.bestsellers-list-item');

console.log(bestListModal);

// const idFunction = getBookById(id)

// bookcardForModal.addEventListener('click', openModal)

let id;

function getCardId(event) {
  const closestDiv = event.target.closest('.bookcard');
  if (closestDiv) {
    id = closestDiv.id;
  }
  // console.log('id = ' + id)
  // console.log('e.target.classlist = '+ event.target.classList)
  return id;
}

const bestsellersListEl = document.querySelector('.bestsellers-list');

window.addEventListener('click', getCardId);
bestsellersListEl.addEventListener('click', openModal);

modalCloseBtn.addEventListener('click', closeModal);

// function openModal(e) {
//     e.preventDefault();
//     if (!e.target.classList.contains('bookcard-image') && !e.target.classList.contains('bookcard-slider') && !e.target.classList.contains('quick-view')) {
//       return
//     }

//     document.addEventListener('keydown', handleKeyPress);
//     modalContainer.classList.add("open-modal")
//     modalOverlay.classList.add("open-modal")

//     bodyToScroll.classList.add('stop-overflow');
//     // windowToScroll.on('scroll', preventScroll);

//     // const bookId = e.dataset.id
//     // console.log(bookId)

//     // addButton.addEventListener('click', function() {
//     //     if (addButton.textContent === 'ADD TO SHOPPING LIST') {
//     //       addButton.textContent = 'REMOVE FROM THE SHOPPING LIST';
//     //       congratsText.textContent = 'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
//     //     } else {
//     //       addButton.textContent = 'ADD TO SHOPPING LIST';
//     //       congratsText.textContent = '';
//     //     }
//     //   });
// }

function closeModal(e) {
  modalContainer.classList.remove('open-modal');
  modalOverlay.classList.remove('open-modal');

  bodyToScroll.classList.remove('stop-overflow');
  // windowToScroll.off('scroll', preventScroll);

  // const congratsText = document.querySelector('.congrats-text');
  // congratsText.classList.remove('congrats-text-active');

  modalBookName.textContent = '';
  modalAuthor.textContent = '';
  modalDescription.textContent = '';
  modalImage.src = '';
  modalImage.alt = '';
  amazonImgLink.href = '';
  appleBooksImgLink.href = '';
  bookshopImgLink.href = '';

  congratsText.textContent = '';
}

function handleKeyPress(event) {
  if (event.keyCode === 27) {
    closeModal();
  }
}

// addButton.addEventListener('click', function() {
//   if (addButton.textContent === 'ADD TO SHOPPING LIST') {
//     addButton.textContent = 'REMOVE FROM THE SHOPPING LIST';
//     congratsText.textContent = 'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
//   } else {
//     addButton.textContent = 'ADD TO SHOPPING LIST';
//     congratsText.textContent = '';
//   }
// });

//------------------test---------------------

function openModal(e) {
  e.preventDefault();
  if (
    !e.target.classList.contains('bookcard-image') &&
    !e.target.classList.contains('bookcard-slider') &&
    !e.target.classList.contains('quick-view')
  ) {
    return;
  }

  document.addEventListener('keydown', handleKeyPress);
  modalContainer.classList.add('open-modal');
  modalOverlay.classList.add('open-modal');

  bodyToScroll.classList.add('stop-overflow');
  // windowToScroll.on('scroll', preventScroll);

  // const bookId = e.dataset.id
  // console.log('bookId in openModal '+bookId)

  const bookId = getCardId(e);
  // console.log('bookId in openModal '+bookId)

  addButton.addEventListener('click', function () {
    if (addButton.textContent === 'ADD TO SHOPPING LIST') {
      addButton.textContent = 'REMOVE FROM THE SHOPPING LIST';
      congratsText.textContent =
        'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
      modalContainer.style.height = '501px';
    } else {
      addButton.textContent = 'ADD TO SHOPPING LIST';
      congratsText.textContent = '';
      modalContainer.style.height = '465px';
    }
  });

  let author,
    description,
    title,
    image,
    amazonUrl,
    appleBooksUrl,
    booksAMillionUrl;

  getBookById(bookId)
    .then(result => {
      const yourObject = result;
      author = yourObject.data.author;
      description = yourObject.data.description;
      title = yourObject.data.title;
      image = yourObject.data.book_image;
      amazonUrl = yourObject.data.buy_links[0].url;
      appleBooksUrl = yourObject.data.buy_links[1].url;
      booksAMillionUrl = yourObject.data.buy_links[3].url;

      myFunction(
        author,
        description,
        title,
        image,
        amazonUrl,
        appleBooksUrl,
        booksAMillionUrl
      );
    })
    .catch(error => {
      console.error(error);
    });

  function myFunction(
    author,
    description,
    title,
    image,
    amazonUrl,
    appleBooksUrl,
    booksAMillionUrl
  ) {
    modalBookName.textContent = title;
    modalAuthor.textContent = author;
    modalDescription.textContent = description;
    modalImage.src = image;
    modalImage.alt = image;
    amazonImgLink.href = amazonUrl;
    appleBooksImgLink.href = appleBooksUrl;
    bookshopImgLink.href = booksAMillionUrl;
  }
}
