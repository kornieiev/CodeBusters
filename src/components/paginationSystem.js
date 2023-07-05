class PaginationSystem {
  constructor() {
    this.page = 1;
    this.countOfPages = 0;
    this.perPage = 20;
    this.refs = {
      arrowLeft: document.querySelector('[data-pag-system="arow-left"]'),
      btn1: document.querySelector('[data-pag-system="1"]'),
      btn2: document.querySelector('[data-pag-system="2"]'),
      btn3: document.querySelector('[data-pag-system="3"]'),
      btn4: document.querySelector('[data-pag-system="4"]'),
      btn5: document.querySelector('[data-pag-system="5"]'),
      btn6: document.querySelector('[data-pag-system="6"]'),
      btn7: document.querySelector('[data-pag-system="7"]'),
      btn8: document.querySelector('[data-pag-system="8"]'),
      btn9: document.querySelector('[data-pag-system="9"]'),
      arrowRight: document.querySelector('[data-pag-system="arow-right"]'),
    };
    this.mainList = document.querySelector('[data-pagination-list]');
    this.mainList.addEventListener('click', this.clickHendler.bind(this));
    this.renderButtons();
  }
  setPerPage(number) {
    this.perPage = number;
    this.renderButtons();
  }
  setTotalItems(number) {
    this.countOfPages = Math.ceil(number / this.perPage);
    this.renderButtons();
  }
  setTotalPages(number) {
    this.countOfPages = number;
    this.renderButtons();
  }
  setPage(page) {
    this.page = page;
    this.renderButtons();
  }
  renderButtons() {
    this.hideSystem();
    console.log(this.countOfPages);
    if (this.countOfPages > 1) {
      const buttonArr = Object.values(this.refs);
      if (window.innerWidth >= 1280) {
        this.renderOnDesctop(buttonArr);
      } else {
        this.renderOnMobile(buttonArr);
      }

      //   buttonArr.find(item => Number.parseInt(item.textContent) === this.page)
      //     .classList.add('pagination-button__checked');
    }
  }
  hideSystem() {
    const buttonArr = Object.values(this.refs);
    buttonArr.forEach(item => {
      item.style.display = 'none';
      if (!item.classList.contains('pagination-button__clicable')) {
        item.classList.add('pagination-button__clicable');
      }
      if (item.classList.contains('pagination-button__checked')) {
        item.classList.remove('pagination-button__checked');
      }
    });
  }
  clickHendler(event) {
    const eventNew = new Event('pagination-system-clicked');
    const target = event.target;
    if (
      target.classList.contains('pagination-button__clicable') &&
      !target.classList.contains('pagination-button__arrow')
    ) {
      this.setPage(Number.parseInt(target.textContent));
    } else if (
      target.classList.contains('pagination-button__clicable') &&
      target.classList.contains('pagination-button__arrow')
    ) {
      if (target.classList.contains('pagination-button__arrow__reversed')) {
        this.page !== 1 && this.setPage(this.page - 1);
      } else {
        this.page !== this.countOfPages && this.setPage(this.page + 1);
      }
    }
    if (target.classList.contains('pagination-button__clicable')) {
      this.mainList.dispatchEvent(eventNew);
      window.scroll(0, 0);
    }
  }
  renderOnDesctop(buttonArr) {
    this.refs.arrowLeft.style.display = 'inline-block';
    this.refs.arrowRight.style.display = 'inline-block';

    if (this.countOfPages < 10) {
      for (let i = 1; i <= this.countOfPages; i++) {
        buttonArr[i].textContent = i;
        buttonArr[i].style.display = 'inline-block';
      }
    } else {
      if (this.page < 7) {
        for (let i = 1; i <= buttonArr.length - 2; i++) {
          buttonArr[i].style.display = 'inline-block';
        }
        this.refs.btn1.textContent = '1';
        this.refs.btn2.textContent = '2';
        this.refs.btn3.textContent = '3';
        this.refs.btn4.textContent = '4';
        this.refs.btn5.textContent = '5';
        this.refs.btn6.textContent = '6';
        this.refs.btn7.textContent = '7';
        this.refs.btn8.textContent = '...';
        this.refs.btn8.classList.remove('pagination-button__clicable');
        this.refs.btn9.textContent = this.countOfPages;
      } else if (this.page >= 7 && this.page <= this.countOfPages - 6) {
        for (let i = 1; i <= buttonArr.length - 1; i++) {
          buttonArr[i].style.display = 'inline-block';
        }
        this.refs.btn1.textContent = '1';
        this.refs.btn2.textContent = '...';
        this.refs.btn2.classList.remove('pagination-button__clicable');
        this.refs.btn3.textContent = this.page - 2;
        this.refs.btn4.textContent = this.page - 1;
        this.refs.btn5.textContent = this.page;
        this.refs.btn6.textContent = this.page + 1;
        this.refs.btn7.textContent = this.page + 2;
        this.refs.btn8.textContent = '...';
        this.refs.btn8.classList.remove('pagination-button__clicable');
        this.refs.btn9.textContent = this.countOfPages;
      } else if (this.page > this.countOfPages - 6) {
        for (let i = 1; i <= buttonArr.length - 1; i++) {
          buttonArr[i].style.display = 'inline-block';
        }
        this.refs.btn1.textContent = '1';
        this.refs.btn2.textContent = '...';
        this.refs.btn2.classList.remove('pagination-button__clicable');
        this.refs.btn3.textContent = this.countOfPages - 6;
        this.refs.btn4.textContent = this.countOfPages - 5;
        this.refs.btn5.textContent = this.countOfPages - 4;
        this.refs.btn6.textContent = this.countOfPages - 3;
        this.refs.btn7.textContent = this.countOfPages - 2;
        this.refs.btn8.textContent = this.countOfPages - 1;
        this.refs.btn9.textContent = this.countOfPages;
      }
    }
  }
  renderOnMobile(buttonArr) {
    this.refs.arrowLeft.style.display = 'inline-block';
    this.refs.arrowRight.style.display = 'inline-block';

    if (this.countOfPages < 5) {
      for (let i = 1; i <= this.countOfPages - 1; i++) {
        buttonArr[i].textContent = i;
        buttonArr[i].style.display = 'inline-block';
      }
    } else {
      if (this.page < 5) {
        for (let i = 1; i <= 5; i++) {
          buttonArr[i].style.display = 'inline-block';
        }
        this.refs.btn1.textContent = '1';
        this.refs.btn2.textContent = '2';
        this.refs.btn3.textContent = '3';
        this.refs.btn4.textContent = '4';
        this.refs.btn5.textContent = '5';
      } else if (this.page >= 5 && this.page <= this.countOfPages - 4) {
        for (let i = 1; i <= 5; i++) {
          buttonArr[i].style.display = 'inline-block';
        }
        this.refs.btn1.textContent = this.page - 2;
        this.refs.btn2.textContent = this.page - 1;
        this.refs.btn3.textContent = this.page;
        this.refs.btn4.textContent = this.page + 1;
        this.refs.btn5.textContent = this.page + 2;
      } else if (this.page > this.countOfPages - 4) {
        for (let i = 1; i <= 5; i++) {
          buttonArr[i].style.display = 'inline-block';
        }

        this.refs.btn1.textContent = this.countOfPages - 4;
        this.refs.btn2.textContent = this.countOfPages - 3;
        this.refs.btn3.textContent = this.countOfPages - 2;
        this.refs.btn4.textContent = this.countOfPages - 1;
        this.refs.btn5.textContent = this.countOfPages;
      }
    }
  }
}

export default PaginationSystem;

export const paginationImitator = (arr, page, perPage) => {
  //   const result = {
  //     page,
  //     perPage,
  //     totalPages: Math.ceil(arr.length / perPage),
  //   };
  console.log(arr);
  const data = arr.filter(
    (item, index) => index >= (page - 1) * perPage && index < page * perPage
  );
  return data;
};
