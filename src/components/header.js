let burgerEl = document.querySelector('.menu-link');
let dropMenuEl = document.querySelector('.dropdown-menu');

function toggleDropMenu (event) {
    event.preventDefault();
    dropMenuEl.classList.toggle('visually-hidden')
}

burgerEl.addEventListener('click', toggleDropMenu)