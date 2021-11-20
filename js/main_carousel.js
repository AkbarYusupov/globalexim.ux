var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + (0)+1) + "</span>";
    // }
  },
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
});

