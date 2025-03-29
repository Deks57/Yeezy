import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import Header from "./modules/mobile-nav.js";
import ExpandableContent from "./modules/expandeble.js";
import Favorites from "./modules/favorites.js";

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
      slidesPerView: 1.5,
      // spaceBetween: -50,
    },

    520: {
      slidesPerView: 3,
      // spaceBetween: -50,
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

let swiperSmall = new Swiper(".swiper-small", {
  direction: "vertical",
  spaceBetween: 30,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

let swiper4 = new Swiper("#swiper4", {
  direction: "vertical",
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".vertical-arrow-next",
    prevEl: ".vertical-arrow-prev",
  },
  thumbs: {
    swiper: swiperSmall,
  },
});

let swiper5 = new Swiper("#swiper5", {
  // loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".white-arrow-next",
    prevEl: ".white-arrow-prev",
  },
});

let swiper6 = new Swiper("#swiper6", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".products__selection-next",
    prevEl: ".products__selection-prev",
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

let maxElements = 5;
let selectedElements = [1];

const tabletItems = document.querySelectorAll(".products__table-item");

tabletItems.forEach((tabletItem) => {
  tabletItem.addEventListener("click", () => {
    if (!selectedElements.includes(tabletItem)) {
      if (selectedElements.length < maxElements) {
        tabletItem.classList.add("active");
        selectedElements.push(tabletItem);
      }
    } else {
      tabletItem.classList.remove("active");
      selectedElements.splice(selectedElements.indexOf(tabletItem), 1);
    }
  });
});

const productsSelects = document.querySelectorAll(".products__select-item");

for (const productsSelect of productsSelects) {
  const trigger = productsSelect.querySelector(".select-trigger");

  trigger.addEventListener("click", () => {
    productsSelect.classList.toggle("active");
  });
}

const favoritesList = document.querySelector(".favorites__list");

window.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-js-favorites")) {
    const card = event.target.closest(".assortment__card");

    const cardInfo = {
      imgSrc: card.querySelector(".assortment__card-img").getAttribute("src"),
      title: card.querySelector(".assortment__card-name").innerText,
      prise: card.querySelector(".h3").innerText,
      // heart: card.querySelector(".favorites__heart").innerText,
    };

    const cardItemHTML = `
    <div class="favorites__card">
    <img
      src="${cardInfo.imgSrc}" alt=""
    />
    <div class="favorites__card-info">
      <div class="favorites__card-name">
        ${cardInfo.title}
      </div>
      <div class="favorites__card-prise">${cardInfo.prise}</div>
    </div>
  </div>`;

    favoritesList.insertAdjacentHTML("beforeend", cardItemHTML);
  }
});

// const favoritesList = document.querySelector(".favorites__list");

// window.addEventListener("click", function (event) {
//   if (event.target.hasAttribute("data-js-favorites")) {
//     const card = event.target.closest(".assortment__card");

//     const cardInfo = {
//       imgSrc: card.querySelector(".assortment__card-img").getAttribute("src"),
//       title: card.querySelector(".assortment__card-name").innerText,
//       price: card.querySelector(".h3").innerText,
//     };
//     {
//       const cardItemHTML = (
//         <div class="favorites__card">
//           <img src="${cardInfo.imgSrc}" alt="${cardInfo.title}" />
//           <div class="favorites__card-info">
//             <div class="favorites__card-name">${cardInfo.title}</div>
//             <div class="favorites__card-price">${cardInfo.price}</div>
//           </div>
//         </div>
//       );
//       favoritesList.insertAdjacentHTML("beforeend", cardItemHTML);
//     }
//   }
// });

new Header();
new ExpandableContent();
new Favorites();
