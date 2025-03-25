import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import Header from "./modules/mobile-nav.js";
import ExpandableContent from "./modules/expandeble.js";

let swiper = new Swiper("#swiper1", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiper2 = new Swiper("#swiper2", {
  // spaceBetween: 30,
  initialSlide: 2,
  slidesPerView: 6,
  centeredSlides: false,
  loop: true,
  grabCursor: true,
  effect: "coverflow",
  coverflowEffect: {
    limitProgress: 4,
    rotate: 0,
    stretch: -45,
    depth: 90,
    modifier: 1,
    slideShadows: false,
  },

  navigation: {
    nextEl: ".next-white",
    prevEl: ".prev-white",
  },

  breakpoints: {
    320: {
      // initialSlide: 2,
      slidesPerView: 2,
      spaceBetween: -50,
    },

    520: {
      slidesPerView: 3,
      spaceBetween: -50,
    },

    768: {
      slidesPerView: 4,
      // spaceBetween: -50,
    },

    1024: {
      slidesPerView: 5,
      // spaceBetween: -50,
    },

    1444: {
      slidesPerView: 6,
    },
  },
});

let swiper3 = new Swiper("#swiper3", {
  spaceBetween: 30,
  slidesPerView: 4,
  loop: true,

  navigation: {
    nextEl: ".next-orange",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    768: {
      spaceBetween: 30,
      slidesPerView: 3,
    },

    1200: {
      // spaceBetween: 30,
      slidesPerView: 4,
    },
  },
});

const selects = document.querySelectorAll(".footer__nav");

for (const select of selects) {
  const trigger = select.querySelector(".select-trigger");

  trigger.addEventListener("click", () => {
    select.classList.toggle("active");
  });
}

const catalogSelects = document.querySelectorAll(".catalog__nav");

for (const catalogSelect of catalogSelects) {
  const trigger = catalogSelect.querySelector(".select-trigger");

  trigger.addEventListener("click", () => {
    catalogSelect.classList.toggle("active");
  });
}

const filters = document.querySelectorAll(".catalog__filters");

for (const filter of filters) {
  const trigger = filter.querySelector(".catalog__filter");

  trigger.addEventListener("click", () => {
    filter.classList.toggle("active");
  });
}

new Header();
new ExpandableContent();
