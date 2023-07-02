const links = document.querySelectorAll('.navigation a');
const burgerEl = document.querySelector('.menu-burger-link');
const closeEl = document.querySelector('.menu-close-link');
const dropMenuEl = document.querySelector('.dropdown-menu');
const switchEl = document.getElementById('switch-theme');
let savedTheme = localStorage.getItem("ui-theme");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// function disableScroll() {
//     document.body.style.overflow = 'hidden';
//   }
  
//   function enableScroll() {
//     document.body.style.overflow = 'auto';
//   }

function toggleSwitchEl() {
    switchEl.classList.toggle('checked');
    localStorage.setItem("ui-theme", switchEl.classList.contains('checked') ? 'dark' : 'light');
  }
  
  switchEl.classList.toggle('checked', savedTheme === 'dark');

function toggleDropMenu (event) {
    event.preventDefault();
    dropMenuEl.classList.toggle('visually-hidden');
    burgerEl.classList.toggle('visually-hidden');
    closeEl.classList.toggle('visually-hidden');
    document.body.classList.toggle('no-scroll');

    // if (element.classList.contains('visible')) {
    //     disableScroll();
    //   } else {
    //     enableScroll();
    //   }
}

burgerEl.addEventListener('click', toggleDropMenu);
switchEl.addEventListener('change', toggleSwitchEl)
