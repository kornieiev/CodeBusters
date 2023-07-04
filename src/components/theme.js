const themeToggleBtn = document.querySelector('#switch-theme');
console.log(themeToggleBtn);

themeToggleBtn.addEventListener('change', switchThemeColor);

function switchThemeColor() {
  if (document.documentElement.hasAttribute('theme')) {
    document.documentElement.removeAttribute('theme');
    localStorage.removeItem('theme');
  } else {
    document.documentElement.setAttribute('theme', 'color-theme');
    localStorage.setItem('theme', 'color-theme');
  }
}

window.onload = function () {
  if (localStorage.getItem('theme') === 'color-theme') {
    document.documentElement.setAttribute('theme', 'color-theme');
  }
};
