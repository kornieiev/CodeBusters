import { getBookById } from "../api"
import { renderBookCard } from './render-modal-book'
import axios from 'axios';

const bodyToScroll = document.querySelector('body')
const windowToScroll = document.querySelector('window')

const modalContainer = document.querySelector('.modal-window-container');
const bookcardForModal = document.querySelectorAll('.bookcard')
const bestSellersBtn = document.querySelector('.bestsellers-button')
const modalCloseBtn = document.querySelector('.modal-icon')
const modalOverlay = document.querySelector('.modal-overlay')
const quickView = document.querySelector('.quick-view')

const addButton = document.querySelector('.modal-add-btn');
const congratsText = document.querySelector('.congrats-text');

const bookListModal = document.querySelector('.list')
const bestListModal = document.querySelector('.bestsellers-list-second')
const bestListMobile = document.querySelector('.bestsellers-mobile')
const bestListItemModal = document.querySelector('.bestsellers-list-item')

console.log(bestListModal)

// const idFunction = getBookById(id)

// bookcardForModal.addEventListener('click', openModal)


let id;

function getCardId (event) {
  const closestDiv = event.target.closest('.bookcard');
  if (closestDiv) {
    id = closestDiv.id;
  }
  // console.log('id = ' + id)
  // console.log('e.target.classlist = '+ event.target.classList)
  return id;
}


window.addEventListener('click', getCardId);
window.addEventListener('click', openModal);

modalCloseBtn.addEventListener('click', closeModal)


function openModal(e) { 
    e.preventDefault();
    if (!e.target.classList.contains('bookcard-image') && !e.target.classList.contains('bookcard-slider') && !e.target.classList.contains('quick-view')) {
      return
    }

    document.addEventListener('keydown', handleKeyPress);
    modalContainer.classList.add("open-modal")
    modalOverlay.classList.add("open-modal")


    bodyToScroll.classList.add('stop-overflow');
    // windowToScroll.on('scroll', preventScroll);

    // const bookId = e.dataset.id
    // console.log(bookId)

    addButton.addEventListener('click', function() {
        if (addButton.textContent === 'ADD TO SHOPPING LIST') {
          addButton.textContent = 'REMOVE FROM THE SHOPPING LIST';
          congratsText.textContent = 'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
        } else {
          addButton.textContent = 'ADD TO SHOPPING LIST';
          congratsText.textContent = '';
        }
      });
}

function closeModal(e) { 
    modalContainer.classList.remove("open-modal")
    modalOverlay.classList.remove("open-modal")

    bodyToScroll.classList.remove('stop-overflow');
    // windowToScroll.off('scroll', preventScroll);

    // const congratsText = document.querySelector('.congrats-text');
    // congratsText.classList.remove('congrats-text-active');
}

function handleKeyPress(event) {
  if (event.keyCode === 27) {
    closeModal();
  }
}


//------------------test---------------------

function openModal(e) { 
  e.preventDefault();
  if (!e.target.classList.contains('bookcard-image') && !e.target.classList.contains('bookcard-slider') && !e.target.classList.contains('quick-view')) {
    return
  }

  document.addEventListener('keydown', handleKeyPress);
  modalContainer.classList.add("open-modal")
  modalOverlay.classList.add("open-modal")


  bodyToScroll.classList.add('stop-overflow');
  // windowToScroll.on('scroll', preventScroll);

  // const bookId = e.dataset.id
  // console.log('bookId in openModal '+bookId)

  const bookId = getCardId (e)
  console.log('bookId in openModal '+bookId)

  const book = getBookById(bookId)
  console.log(book)

  // const resultBook = renderBookCard(book)
  // console.log(resultBook)

  console.log(book.author)

  addButton.addEventListener('click', function() {
      if (addButton.textContent === 'ADD TO SHOPPING LIST') {
        addButton.textContent = 'REMOVE FROM THE SHOPPING LIST';
        congratsText.textContent = 'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
      } else {
        addButton.textContent = 'ADD TO SHOPPING LIST';
        congratsText.textContent = '';
      }
    });
}


