const swiper = new Swiper('.info-swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  breakpoints: {
    // mobil
    0: {
      slidesPerView: 1.4,
    },
    // planshet
    768: {
      slidesPerView: 2,
    },
    // kichik noutbuk
    1024: {
      slidesPerView: 2.8,
    },
    // desktop
    1280: {
      slidesPerView: 3.8,
    }
  }
});
