import { getBookById } from "../api"
import { renderBookCard } from './render-modal-book'
const bodyToScroll = document.querySelector('body')
const windowToScroll = document.querySelector('window')

const modalContainer = document.querySelector('.modal-window-container');
const bookcardForModal = document.querySelectorAll('.bookcard')
const bestSellersBtn = document.querySelector('.bestsellers-button')
const modalCloseBtn = document.querySelector('.modal-icon')
const modalOverlay = document.querySelector('.modal-overlay')
const quickView = document.querySelector('.quick-view')
console.log(bodyToScroll)

// bookcardForModal.addEventListener('click', openModal)
bestSellersBtn.addEventListener('click', openModal)
modalCloseBtn.addEventListener('click', closeModal)

quickView.addEventListener('click', openModal)
// modalCloseBtn.addEventListener('click', closeModal)



function openModal(e) { 
    e.preventDefault();
    document.addEventListener('keydown', handleKeyPress);
    modalContainer.classList.add("open-modal")
    modalOverlay.classList.add("open-modal")


    bodyToScroll.classList.add('stop-overflow');
    // windowToScroll.on('scroll', preventScroll);
}

function closeModal(e) { 
    modalContainer.classList.remove("open-modal")
    modalOverlay.classList.remove("open-modal")
    // document.removeEventListener('keydown', handleKeyPress);

    bodyToScroll.classList.remove('stop-overflow');
    // windowToScroll.off('scroll', preventScroll);
}

function handleKeyPress(event) {
  if (event.keyCode === 27) {
    closeModal();
  }
}
// document.addEventListener('keydown', handleKeyPress);


