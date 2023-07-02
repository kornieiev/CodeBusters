import Swiper from 'swiper';

const btnSwiper = document.querySelector('.swiper-button-next')
console.log(btnSwiper);

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  spaceBetween: 20,
  slidesPerView: 'auto',
  rewind: true,

  navigation: {
    nextEl: '.swiper-button-next',
  },

  plugins: {
    scrollContainer: true,
  },
});

swiper.update();

btnSwiper.addEventListener('click', () => {
  swiper.slideNext();
});
