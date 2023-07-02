// Отримання даних з localStorage
const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

// Функція для створення карточки з даними
function createShoppingCard(book) {
  const cardListContainer = document.querySelector('.shopping-list-cardlist');

  const cardHTML = `
    <li class="shopping-list-card">
      <img class="shopping-list-cardlogo" src="../images/shopping-list-cardlogo-test.png" alt="book-logo" />
      <div class="shopping-list-fullinfo">
        <div class="shopping-list-cardheader">
          <div class="cardheader-titlecontainer">
            <h3 class="shopping-list-cardtitle">${book.title}</h3>
            <h4 class="shopping-list-cardcategory">${book.category}</h4>
          </div>
          <button class="deletecard">Х</button>
        </div>
        <p class="shopping-list-carddescription">${book.description}</p>
        <div class="shopping-list-cardfooter">
          <h4 class="shopping-list-cardauthor">${book.author}</h4>
          <ul class="shopping-list-shops">
            ${generateShopLinks(book.shops)}
          </ul>
        </div>
      </div>
    </li>
  `;

  cardListContainer.innerHTML += cardHTML;
}

// Функція для генерації посилань на магазини
function generateShopLinks(shops) {
  return shops
    .map(
      shop => `
    <li class="shopping-list-shopsitem">
      <a href="${shop.url}" class="shopping-list-shopslink">
        <svg class="shopping-list-shopsicon" width="16" height="16">
          <use href="../images/sprite.svg#icon-burger"></use>
        </svg>
      </a>
    </li>
  `
    )
    .join('');
}

// Відображення карточок з даними з localStorage
function displayShoppingCards() {
  const cardListContainer = document.querySelector('.shopping-list-cardlist');
  cardListContainer.innerHTML = '';

  shoppingList.forEach(book => {
    createShoppingCard(book);
  });
}

// Оновлення даних в localStorage
function updateLocalStorage() {
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

// Приклад додавання книги до списку
const bookToAdd = {
  title: 'I will find you',
  category: 'Hardcover fiction',
  description: 'David Burroughs was once a devoted father...',
  author: 'R.J. Palacio',
  shops: [{ url: 'shop1-url' }, { url: 'shop2-url' }, { url: 'shop3-url' }],
};

shoppingList.push(bookToAdd);
updateLocalStorage();
displayShoppingCards();
