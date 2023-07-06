// тут буде логіка для розмітки яка буде створюватись з данних бекенду
export const renderBooks = ({ books }) => {
  return `
    <div class="bestsellers-home">
        <h3 class="bestsellers-name style-js">
                    <div class="bestsellers-name-first">${
                      books[0].list_name
                    }</div>
                    <div class="bestsellers-name-second">Books</div>
        </h3>
        <div class="bestsellers-list">
                <div class="bestsellers-list-item list">
                    <ul class="bestsellers-choose-list bestsellers-list-second">
                        ${books
                          .map(book => {
                            return `
                            <li class="choose-list-item">
                                <div id="${book._id}" class="bookcard">
                                    <img class="bookcard-image" src="${book.book_image}" alt="book cover" width="280">
                                    <h5 class="bookcard-name">${book.title}</h5>
                                    <p class="bookcard-author">${book.author}</p>
                                </div>
                            </li>
                            `;
                          })
                          .join('')}
                         
                    </ul>
                </div>
        </div>
    </div>  
    `;
};

export const renderHomePage = () => {
  return `
    
  <div class="bestsellers-home">
    <h3 class="bestsellers-name">
      <div class="bestsellers-name-first">Best Sellers</div>
      <div class="bestsellers-name-second">Books</div>
    </h3>
    <ul class="bestsellers-list">
      <li class="bestsellers-list-item list">
        <h4 class="bestsellers-item-name">Combined Print and E-Book Fiction</h4>
        <ul class="bestsellers-list-second">
          <li><div id="" class="bookcard">
  <div class="wrapper">
    <svg class="bookcard-svg" width="88px" height="80px">
      <use href="/sprite.f14d31f7.svg#icon-bestseller"></use>
    </svg>
    <img class="bookcard-image" src="https://storage.googleapis.com/du-prd/books/images/9781338616101.jpg" alt="" width="280">

    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name">MARY ANNE'S BAD LUCK MYSTERY</h5>
  <p class="bookcard-author">Ann M. Martin.</p>
</div>
</li>
          <li class="bestsellers-mobile">
            <div id="" class="bookcard">
  <div class="wrapper">
    <svg class="bookcard-svg" width="88px" height="80px">
      <use href="/sprite.f14d31f7.svg#icon-bestseller"></use>
    </svg>
    <img class="bookcard-image" src="https://storage.googleapis.com/du-prd/books/images/9781338730890.jpg" alt="" width="280">

    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name">MOON RISING</h5>
  <p class="bookcard-author">Tui T. Sutherland.</p>
</div>

          </li>
          <li class="bestsellers-mobile">
            <div id="" class="bookcard">
  <div class="wrapper">
    <svg class="bookcard-svg" width="88px" height="80px">
      <use href="/sprite.f14d31f7.svg#icon-bestseller"></use>
    </svg>
    <img class="bookcard-image" src="https://storage.googleapis.com/du-prd/books/images/9781974736287.jpg" alt="" width="280">

    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name">SPY X FAMILY, VOL. 9</h5>
  <p class="bookcard-author">Tatsuya Endo</p>
</div>

          </li>
          <li class="bestsellers-mobile bestsellers-tablet">
            <div id="" class="bookcard">
  <div class="wrapper">
    <svg class="bookcard-svg" width="88px" height="80px">
      <use href="/sprite.f14d31f7.svg#icon-bestseller"></use>
    </svg>
    <img class="bookcard-image" src="https://storage.googleapis.com/du-prd/books/images/9781974734740.jpg" alt="" width="280">

    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name">MY HERO ACADEMIA, VOL. 33</h5>
  <p class="bookcard-author">Kohei Horikoshi</p>
</div>

          </li>
          <li class="bestsellers-mobile bestsellers-tablet">
            <div id="" class="bookcard">
  <div class="wrapper">
    <svg class="bookcard-svg" width="88px" height="80px">
      <use href="/sprite.f14d31f7.svg#icon-bestseller"></use>
    </svg>
    <img class="bookcard-image" src="https://storage.googleapis.com/du-prd/books/images/9781338616101.jpg" alt="" width="280">

    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name">MARY ANNE'S BAD LUCK MYSTERY</h5>
  <p class="bookcard-author">Ann M. Martin.</p>
</div>

          </li>
        </ul>
        <div class="bestsellers-button-pading">
          <button class="bestsellers-button">see more</button>
        </div>
      </li>
      <li class="bestsellers-list-item list">
        <h4 class="bestsellers-item-name">Graphic Books and Manga</h4>
        <ul class="bestsellers-list-second">
          <li class="">
            <div id="" class="bookcard">
  <div class="wrapper">
    <svg class="bookcard-svg" width="88px" height="80px">
      <use href="/sprite.f14d31f7.svg#icon-bestseller"></use>
    </svg>
    <img class="bookcard-image" src="https://storage.googleapis.com/du-prd/books/images/9781974736270.jpg" alt="" width="280">

    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name">JUJUTSU KAISEN, VOL. 19</h5>
  <p class="bookcard-author">Gege Akutami</p>
</div>

          </li>
          <li class="bestsellers-mobile">
            <div id="" class="bookcard">
  <div class="wrapper">
    <svg class="bookcard-svg" width="88px" height="80px">
      <use href="/sprite.f14d31f7.svg#icon-bestseller"></use>
    </svg>
    <img class="bookcard-image" src="https://storage.googleapis.com/du-prd/books/images/9781974734740.jpg" alt="" width="280">

    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name">MY HERO ACADEMIA, VOL. 33</h5>
  <p class="bookcard-author">Kohei Horikoshi</p>
</div>

          </li>
          <li class="bestsellers-mobile">
            <div id="" class="bookcard">
  <div class="wrapper">
    <svg class="bookcard-svg" width="88px" height="80px">
      <use href="/sprite.f14d31f7.svg#icon-bestseller"></use>
    </svg>
    <img class="bookcard-image" src="https://storage.googleapis.com/du-prd/books/images/9781338680454.jpg" alt="" width="280">

    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name">MOTHERING HEIGHTS</h5>
  <p class="bookcard-author">Dav Pilkey</p>
</div>

          </li>
          <li class="bestsellers-mobile bestsellers-tablet">
            <div id="" class="bookcard">
  <div class="wrapper">
    <svg class="bookcard-svg" width="88px" height="80px">
      <use href="/sprite.f14d31f7.svg#icon-bestseller"></use>
    </svg>
    <img class="bookcard-image" src="https://storage.googleapis.com/du-prd/books/images/9781974700523.jpg" alt="" width="280">

    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name">DEMON SLAYER: KIMETSU NO YAIBA, VOL. 1</h5>
  <p class="bookcard-author">Koyoharu Gotouge</p>
</div>

          </li>
          <li class="bestsellers-mobile bestsellers-tablet">
            <div id="" class="bookcard">
  <div class="wrapper">
    <svg class="bookcard-svg" width="88px" height="80px">
      <use href="/sprite.f14d31f7.svg#icon-bestseller"></use>
    </svg>
    <img class="bookcard-image" src="https://storage.googleapis.com/du-prd/books/images/9781974736287.jpg" alt="" width="280">

    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name">SPY X FAMILY, VOL. 9</h5>
  <p class="bookcard-author">Tatsuya Endo</p>
</div>

          </li>
        </ul>
        <div class="bestsellers-button-pading">
          <button class="bestsellers-button">see more</button>
        </div>
      </li>
      <li class="bestsellers-list-item list">
        <h4 class="bestsellers-item-name">Hardcover Fiction</h4>
        <ul class="bestsellers-list-second">
          <li><div id="" class="bookcard">
  <div class="wrapper">
    <svg class="bookcard-svg" width="88px" height="80px">
      <use href="/sprite.f14d31f7.svg#icon-bestseller"></use>
    </svg>
    <img class="bookcard-image" src="https://storage.googleapis.com/du-prd/books/images/9781338616101.jpg" alt="" width="280">

    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name">MARY ANNE'S BAD LUCK MYSTERY</h5>
  <p class="bookcard-author">Ann M. Martin.</p>
</div>
</li>
          <li class="bestsellers-mobile">
            <div id="" class="bookcard">
  <div class="wrapper">
    <svg class="bookcard-svg" width="88px" height="80px">
      <use href="/sprite.f14d31f7.svg#icon-bestseller"></use>
    </svg>
    <img class="bookcard-image" src="https://storage.googleapis.com/du-prd/books/images/9781338762587.jpg" alt="" width="280">

    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name">KAREN'S BIRTHDAY</h5>
  <p class="bookcard-author">Ann M. Martin.</p>
</div>

          </li>
          <li class="bestsellers-mobile">
            <div id="" class="bookcard">
  <div class="wrapper">
    <svg class="bookcard-svg" width="88px" height="80px">
      <use href="/sprite.f14d31f7.svg#icon-bestseller"></use>
    </svg>
    <img class="bookcard-image" src="https://storage.googleapis.com/du-prd/books/images/9781338762587.jpg" alt="" width="280">

    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name">KAREN'S BIRTHDAY</h5>
  <p class="bookcard-author">Ann M. Martin.</p>
</div>

          </li>
          <li class="bestsellers-mobile bestsellers-tablet">
            <div id="" class="bookcard">
  <div class="wrapper">
    <svg class="bookcard-svg" width="88px" height="80px">
      <use href="/sprite.f14d31f7.svg#icon-bestseller"></use>
    </svg>
    <img class="bookcard-image" src="https://storage.googleapis.com/du-prd/books/images/9781338236590.jpg" alt="" width="280">

    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name">FOR WHOM THE BALL ROLLS</h5>
  <p class="bookcard-author">Dav Pilkey</p>
</div>

          </li>
          <li class="bestsellers-mobile bestsellers-tablet">
            <div id="" class="bookcard">
  <div class="wrapper">
    <svg class="bookcard-svg" width="88px" height="80px">
      <use href="/sprite.f14d31f7.svg#icon-bestseller"></use>
    </svg>
    <img class="bookcard-image" src="https://storage.googleapis.com/du-prd/books/images/9781338535624.jpg" alt="" width="280">

    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name">GRIME AND PUNISHMENT</h5>
  <p class="bookcard-author">Dav Pilkey</p>
</div>

          </li>
        </ul>
        <div class="bestsellers-button-pading">
          <button class="bestsellers-button">see more</button>
        </div>
      </li>
      <li class="bestsellers-list-item list">
        <h4 class="bestsellers-item-name">Hardcover Nonfiction</h4>
        <ul class="bestsellers-list-second">
          <li><div id="" class="bookcard">
  <div class="wrapper">
    <svg class="bookcard-svg" width="88px" height="80px">
      <use href="/sprite.f14d31f7.svg#icon-bestseller"></use>
    </svg>
    <img class="bookcard-image" src="https://storage.googleapis.com/du-prd/books/images/9781338730890.jpg" alt="" width="280">

    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name">MOON RISING</h5>
  <p class="bookcard-author">Tui T. Sutherland.</p>
</div>
</li>
          <li class="bestsellers-mobile">
            <div id="" class="bookcard">
  <div class="wrapper">
    <svg class="bookcard-svg" width="88px" height="80px">
      <use href="/sprite.f14d31f7.svg#icon-bestseller"></use>
    </svg>
    <img class="bookcard-image" src="https://storage.googleapis.com/du-prd/books/images/9781974734740.jpg" alt="" width="280">

    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name">MY HERO ACADEMIA, VOL. 33</h5>
  <p class="bookcard-author">Kohei Horikoshi</p>
</div>

          </li>
          <li class="bestsellers-mobile">
            <div id="" class="bookcard">
  <div class="wrapper">
    <svg class="bookcard-svg" width="88px" height="80px">
      <use href="/sprite.f14d31f7.svg#icon-bestseller"></use>
    </svg>
    <img class="bookcard-image" src="https://storage.googleapis.com/du-prd/books/images/9781338616101.jpg" alt="" width="280">

    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name">MARY ANNE'S BAD LUCK MYSTERY</h5>
  <p class="bookcard-author">Ann M. Martin.</p>
</div>

          </li>
          <li class="bestsellers-mobile bestsellers-tablet">
            <div id="" class="bookcard">
  <div class="wrapper">
    <svg class="bookcard-svg" width="88px" height="80px">
      <use href="/sprite.f14d31f7.svg#icon-bestseller"></use>
    </svg>
    <img class="bookcard-image" src="https://storage.googleapis.com/du-prd/books/images/9781338730890.jpg" alt="" width="280">

    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name">MOON RISING</h5>
  <p class="bookcard-author">Tui T. Sutherland.</p>
</div>

          </li>
          <li class="bestsellers-mobile bestsellers-tablet">
            <div id="" class="bookcard">
  <div class="wrapper">
    <svg class="bookcard-svg" width="88px" height="80px">
      <use href="/sprite.f14d31f7.svg#icon-bestseller"></use>
    </svg>
    <img class="bookcard-image" src="https://storage.googleapis.com/du-prd/books/images/9781338846621.jpg" alt="" width="280">

    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name">COLLABORATIONS</h5>
  <p class="bookcard-author">Dav Pilkey</p>
</div>

          </li>
        </ul>
        <div class="bestsellers-button-pading">
          <button class="bestsellers-button">see more</button>
        </div>
      </li>
    </ul>
  </div>
  <button class="bestsellers-button-up">
    <svg class="bestsellers-button-icon" width="24" height="24">
      <use href="/sprite.27a88722.svg#"></use>
    </svg>
  </button>
  <div class="category-block">
    <h3 class="bestsellers-name">
      <div class="bestsellers-name-first category-name-first"></div>
      <div class="bestsellers-name-second category-name-second"></div>
    </h3>
    <ul class="bestsellers-choose-list list">
      <li class="choose-list-item">
        <div id="" class="bookcard bookcard-second">
  <div class="wrapper">
    <img class="bookcard-image bookcard-images" src="/book.d8bdfa8d.jpg" alt="book cover" width="280">
    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name bookcard-names"></h5>
  <p class="bookcard-author bookcard-authors"></p>
</div>

      </li>
      <li class="choose-list-item">
        <div id="" class="bookcard bookcard-second">
  <div class="wrapper">
    <img class="bookcard-image bookcard-images" src="/book.d8bdfa8d.jpg" alt="book cover" width="280">
    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name bookcard-names"></h5>
  <p class="bookcard-author bookcard-authors"></p>
</div>

      </li>
      <li class="choose-list-item">
        <div id="" class="bookcard bookcard-second">
  <div class="wrapper">
    <img class="bookcard-image bookcard-images" src="/book.d8bdfa8d.jpg" alt="book cover" width="280">
    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name bookcard-names"></h5>
  <p class="bookcard-author bookcard-authors"></p>
</div>

      </li>
      <li class="choose-list-item">
        <div id="" class="bookcard bookcard-second">
  <div class="wrapper">
    <img class="bookcard-image bookcard-images" src="/book.d8bdfa8d.jpg" alt="book cover" width="280">
    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name bookcard-names"></h5>
  <p class="bookcard-author bookcard-authors"></p>
</div>

      </li>
      <li class="choose-list-item">
        <div id="" class="bookcard bookcard-second">
  <div class="wrapper">
    <img class="bookcard-image bookcard-images" src="/book.d8bdfa8d.jpg" alt="book cover" width="280">
    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name bookcard-names"></h5>
  <p class="bookcard-author bookcard-authors"></p>
</div>

      </li>
      <li class="choose-list-item">
        <div id="" class="bookcard bookcard-second">
  <div class="wrapper">
    <img class="bookcard-image bookcard-images" src="/book.d8bdfa8d.jpg" alt="book cover" width="280">
    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name bookcard-names"></h5>
  <p class="bookcard-author bookcard-authors"></p>
</div>

      </li>
      <li class="choose-list-item">
        <div id="" class="bookcard bookcard-second">
  <div class="wrapper">
    <img class="bookcard-image bookcard-images" src="/book.d8bdfa8d.jpg" alt="book cover" width="280">
    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name bookcard-names"></h5>
  <p class="bookcard-author bookcard-authors"></p>
</div>

      </li>
      <li class="choose-list-item">
        <div id="" class="bookcard bookcard-second">
  <div class="wrapper">
    <img class="bookcard-image bookcard-images" src="/book.d8bdfa8d.jpg" alt="book cover" width="280">
    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name bookcard-names"></h5>
  <p class="bookcard-author bookcard-authors"></p>
</div>

      </li>
      <li class="choose-list-item">
        <div id="" class="bookcard bookcard-second">
  <div class="wrapper">
    <img class="bookcard-image bookcard-images" src="/book.d8bdfa8d.jpg" alt="book cover" width="280">
    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name bookcard-names"></h5>
  <p class="bookcard-author bookcard-authors"></p>
</div>

      </li>
      <li class="choose-list-item">
        <div id="" class="bookcard bookcard-second">
  <div class="wrapper">
    <img class="bookcard-image bookcard-images" src="/book.d8bdfa8d.jpg" alt="book cover" width="280">
    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name bookcard-names"></h5>
  <p class="bookcard-author bookcard-authors"></p>
</div>

      </li>
      <li class="choose-list-item">
        <div id="" class="bookcard bookcard-second">
  <div class="wrapper">
    <img class="bookcard-image bookcard-images" src="/book.d8bdfa8d.jpg" alt="book cover" width="280">
    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name bookcard-names"></h5>
  <p class="bookcard-author bookcard-authors"></p>
</div>

      </li>
      <li class="choose-list-item">
        <div id="" class="bookcard bookcard-second">
  <div class="wrapper">
    <img class="bookcard-image bookcard-images" src="/book.d8bdfa8d.jpg" alt="book cover" width="280">
    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name bookcard-names"></h5>
  <p class="bookcard-author bookcard-authors"></p>
</div>

      </li>
      <li class="choose-list-item">
        <div id="" class="bookcard bookcard-second">
  <div class="wrapper">
    <img class="bookcard-image bookcard-images" src="/book.d8bdfa8d.jpg" alt="book cover" width="280">
    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name bookcard-names"></h5>
  <p class="bookcard-author bookcard-authors"></p>
</div>

      </li>
      <li class="choose-list-item">
        <div id="" class="bookcard bookcard-second">
  <div class="wrapper">
    <img class="bookcard-image bookcard-images" src="/book.d8bdfa8d.jpg" alt="book cover" width="280">
    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name bookcard-names"></h5>
  <p class="bookcard-author bookcard-authors"></p>
</div>

      </li>
      <li class="choose-list-item">
        <div id="" class="bookcard bookcard-second">
  <div class="wrapper">
    <img class="bookcard-image bookcard-images" src="/book.d8bdfa8d.jpg" alt="book cover" width="280">
    <a href="" class="link bookcard-slider"><p class="quick-view">quick view</p></a>
  </div>
  <h5 class="bookcard-name bookcard-names"></h5>
  <p class="bookcard-author bookcard-authors"></p>
</div>

      </li>
    </ul>
  </div>
    `;
};
