var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
});

