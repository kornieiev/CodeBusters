export function renderBookCard(book) {
    const modalBookInfo = document.querySelector('.modal-book-info')
    if (!book.description) {
        const bookCardMarkup = `
  <div class="modal-book-info">
  <img class="modal-image" src="${book.book_image}" alt="${book.title
            }" height="256" loading="lazy"/>
      <div>
        <p class="modal-book-name">${book.title}</p>
       <p class="modal-author">${book.author}</p>
        <div class="description">
          <p class="modal-description">Unfortunately, this book has no description yet.</p>
        </div>
                     <ul class="shops-links-list">
             <li class="shop-item">
             <a href="${book.buy_links[0].url
            }" class="shop-item-link" target=_blank>
             <img
             class="shops-item-icon amazon-img"
             srcset="
             ${require('../images/modal-img/amazon@1x.png')} 48w,
             ${require('../images/modal-img/amazon@2x.png')} 96w,
             "
             sizes="48px"
              src="${require('../images/modal-img/amazon@1x.png')}"
              width="48" height="15"
              alt="Amazon"
              />
              
             </a>
              </li>
              <li class="shop-item">
              <a href="${book.buy_links[1].url
            }" class="shop-item-link" target=_blank>
               <img
             class="shops-item-icon"
             srcset="
             ${require('../images/modal-img/appleBooks@1x.png')} 28w,
             ${require('../images/modal-img/appleBooks@2x.png')} 56w,
             "
             sizes="28px"
              src="${require('../images/modal-img/appleBooks@1x.png')}"
              width="28" height="27"
              alt="Apple Books"
              />
             </a>
              </li>
              <li class="shop-item">
              <a href="${book.buy_links[4].url
            }" class="shop-item-link" target=_blank>
               <img
             class="shops-item-icon"
             srcset="
             ${require('../images/modal-img/booksAMillion@1x.png')} 32w,
             ${require('../images/modal-img/booksAMillion@2x.png')} 64w,
             "sizes="32px"
              src="${require('../images/modal-img/booksAMillion@1x.png')}"
              width="32" height="30"
              alt="Bookshop"
              />
                </a>
                  </li>
                  </ul>
      </div>
    </div>
    `;
    modalBookInfo.innerHTML = bookCardMarkup;
    } else {
        const bookCardMarkup = `
  <div class="modal-book-info">
  <img class="modal-image" src="${book.book_image}" alt="${book.title
            }" height="256" loading="lazy"/>
      <div>
        <p class="modal-book-name">${book.title}</p>
       <p class="modal-author">${book.author}</p>
        <div class="description">
          <p class="modal-description">${book.description}</p>
        </div>
                     <ul class="shops-links-list">
             <li class="shop-item">
             <a href="${book.buy_links[0].url
            }" class="shop-item-link" target=_blank>
             <img
             class="shops-item-icon amazon-img"
             srcset="
             ${require('../images/modal-img/amazon@1x.png')} 48w,
             ${require('../images/modal-img/amazon@2x.png')} 96w,
             "
             sizes="48px"
              src="${require('../images/modal-img/amazon@1x.png')}"
              width="48" height="15"
              alt="Amazon"
              />
              
             </a>
              </li>
              <li class="shop-item">
              <a href="${book.buy_links[1].url
            }" class="shop-item-link" target=_blank>
               <img
             class="shops-item-icon"
             srcset="
             ${require('../images/modal-img/appleBooks@1x.png')} 28w,
             ${require('../images/modal-img/appleBooks@2x.png')} 56w,
             "
             sizes="28px"
              src="${require('../images/modal-img/appleBooks@1x.png')}"
              width="28" height="27"
              alt="Apple Books"
              />
             </a>
              </li>
              <li class="shop-item">
              <a href="${book.buy_links[4].url
            }" class="shop-item-link" target=_blank>
               <img
             class="shops-item-icon"
             srcset="
             ${require('../images/modal-img/booksAMillion@1x.png')} 32w,
             ${require('../images/modal-img/booksAMillion@2x.png')} 64w,
             "sizes="32px"
              src="${require('../images/modal-img/booksAMillion@1x.png')}"
              width="32" height="30"
              alt="Bookshop"
              />
                </a>
                  </li>
                  </ul>
      </div>
    </div>
    `;
    modalBookInfo.innerHTML = bookCardMarkup;
    }
}