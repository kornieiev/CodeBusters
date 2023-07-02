// тут логіка JS для сторінки SHOPPING-LIST
// Отримання даних з localStorage
const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

// Функція для створення карточки з даними
function createShoppingCard(book) {
  const cardContainer = document.querySelector('.shopping-list-cardlist');

  // Створення елементів карточки
  const card = document.createElement('li');
  card.classList.add('shopping-list-card');

  const logo = document.createElement('img');
  logo.classList.add('shopping-list-cardlogo');
  logo.src = '../images/shopping-list-cardlogo-test.png';
  logo.alt = 'book-logo';

  const fullInfo = document.createElement('div');
  fullInfo.classList.add('shopping-list-fullinfo');

  const cardHeader = document.createElement('div');
  cardHeader.classList.add('shopping-list-cardheader');

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('cardheader-titlecontainer');

  const title = document.createElement('h3');
  title.classList.add('shopping-list-cardtitle');
  title.textContent = book.title;

  const category = document.createElement('h4');
  category.classList.add('shopping-list-cardcategory');
  category.textContent = book.category;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('deletecard');
  deleteButton.textContent = 'Х';

  const description = document.createElement('p');
  description.classList.add('shopping-list-carddescription');
  description.textContent = book.description;

  const cardFooter = document.createElement('div');
  cardFooter.classList.add('shopping-list-cardfooter');

  const author = document.createElement('h4');
  author.classList.add('shopping-list-cardauthor');
  author.textContent = book.author;

  const shops = document.createElement('ul');
  shops.classList.add('shopping-list-shops');

  // Додавання посилань на магазини
  book.shops.forEach(shop => {
    const shopItem = document.createElement('li');
    shopItem.classList.add('shopping-list-shopsitem');

    const shopLink = document.createElement('a');
    shopLink.href = shop.url;
    shopLink.classList.add('shopping-list-shopslink');

    const shopIcon = document.createElement('svg');
    shopIcon.classList.add('shopping-list-shopsicon');
    shopIcon.width = '16';
    shopIcon.height = '16';

    const useElement = document.createElement('use');
    useElement.href = '../images/sprite.svg#icon-burger';

    shopIcon.appendChild(useElement);
    shopLink.appendChild(shopIcon);
    shopItem.appendChild(shopLink);
    shops.appendChild(shopItem);
  });

  // Додавання елементів до карточки
  titleContainer.appendChild(title);
  titleContainer.appendChild(category);
  cardHeader.appendChild(titleContainer);
  cardHeader.appendChild(deleteButton);
  fullInfo.appendChild(cardHeader);
  fullInfo.appendChild(description);
  cardFooter.appendChild(author);
  cardFooter.appendChild(shops);
  fullInfo.appendChild(cardFooter);
  card.appendChild(logo);
  card.appendChild(fullInfo);

  cardContainer.appendChild(card);
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
