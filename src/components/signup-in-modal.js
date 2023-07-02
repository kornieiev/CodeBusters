
const openModalBtn = document.querySelector("[data-modal-open]");
const closeFirstModalBtn = document.querySelector("[data-modal-close-up]");
const closeSecondModalBtn = document.querySelector("[data-modal-close-in]");
const signUpBtn = document.querySelector(".sign-link.up");
const signInBtn = document.querySelector(".sign-link.in");
const modalUp = document.querySelector("[data-modal-up]");
const modalIn = document.querySelector("[data-modal-in]");

function toggleModalWindow () {
    modalUp.classList.remove('is-hidden');
    document.body.classList.toggle('no-scroll');
}


function openSecondModal (event) {
    event.preventDefault();
    modalUp.classList.add('is-hidden');
    modalIn.classList.remove('is-hidden');
}

function openFirstModal (event) {
    event.preventDefault();
    modalUp.classList.remove('is-hidden');
    modalIn.classList.add('is-hidden');
}

function closeModal () {
    modalUp.classList.add('is-hidden');
    modalIn.classList.add('is-hidden');
}



openModalBtn.addEventListener('click', toggleModalWindow);
signUpBtn.addEventListener('click', openSecondModal);
signInBtn.addEventListener('click', openFirstModal);
closeFirstModalBtn.addEventListener('click', closeModal);
closeSecondModalBtn.addEventListener('click', closeModal);



