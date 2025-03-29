// class Favorites {
//   selectors = {
//     root: "[data-js-header]",
//     favoriteOverlay: "[data-js-favorites-overlay]",
//     favoritesButton: "[data-js-favorites-button]",
//   };

//   stateClassis = {
//     isActive: "active",
//     isLock: "is-lock",
//   };

//   constructor() {
//     this.rootElement = document.querySelector(this.selectors.root);

//     // Проверяем, что элементы существуют
//     if (!this.rootElement) {
//       console.error("Корневой элемент не найден");
//       return;
//     }

//     this.favoriteOverlayElement = this.rootElement.querySelector(
//       this.selectors.favoriteOverlay
//     );

//     this.favoritesButtonElement = this.rootElement.querySelector(
//       this.selectors.favoritesButton
//     );

//     // Проверяем, что кнопка и оверлей существуют
//     if (!this.favoriteOverlayElement || !this.favoritesButtonElement) {
//       console.error("Элементы кнопки или оверлея не найдены");
//       return;
//     }

//     this.bindEvents();
//   }

//   onFavoritesButton = () => {
//     this.favoritesButtonElement.classList.toggle(this.stateClassis.isActive);
//     this.favoriteOverlayElement.classList.toggle(this.stateClassis.isActive);
//     document.documentElement.classList.toggle(this.stateClassis.isLock);

//     console.log("Кнопка нажата");
//   };

//   bindEvents() {
//     this.favoritesButtonElement.addEventListener(
//       "click",
//       this.onFavoritesButton
//     );
//   }
// }
// Создаем экземпляр класса после загрузки DOM
// document.addEventListener("DOMContentLoaded", () => {
//   new Favorites();
// });

// class Favorites {
//   selectors = {
//     root: "[data-js-header]",
//     overlay: "[data-js-favorites-overlay]",
//     favoritesButton: "[data-js-favorites-button]",
//   };

//   stateClassis = {
//     isActive: "active",
//     isLock: "is-lock",
//   };

//   constructor() {
//     this.rootElement = document.querySelector(this.selectors.root);
//     this.overlayElement = this.rootElement.querySelector(
//       this.selectors.overlay
//     );
//     this.favoritesButtonElement = this.rootElement.querySelector(
//       this.selectors.favoritesButton
//     );
//     this.bindEvents();
//   }

//   onFavoritesButtonClick = () => {
//     console.log("Favorites button clicked");
//     this.toggleMenu();
//   };

//   onDocumentClick = (event) => {
//     const isClickInsideMenu = this.rootElement.contains(event.target);
//     const isFavoritesButtonClicked = this.favoritesButtonElement.contains(
//       event.target
//     );

//     if (!isClickInsideMenu && !isFavoritesButtonClicked) {
//       this.closeMenu();
//     }
//   };

//   toggleMenu() {
//     const isActive = this.favoritesButtonElement.classList.toggle(
//       this.stateClassis.isActive
//     );
//     this.overlayElement.classList.toggle(this.stateClassis.isActive);
//     document.documentElement.classList.toggle(
//       this.stateClassis.isLock,
//       isActive
//     );
//   }

//   closeMenu() {
//     this.favoritesButtonElement.classList.remove(this.stateClassis.isActive);
//     this.overlayElement.classList.remove(this.stateClassis.isActive);
//     document.documentElement.classList.remove(this.stateClassis.isLock);
//   }

//   bindEvents() {
//     this.favoritesButtonElement.addEventListener(
//       "click",
//       this.onFavoritesButtonClick
//     );
//     document.addEventListener("click", this.onDocumentClick);
//     // this.favoritesButtonElement.addEventListener(
//     //   "click",
//     //   this.onFavoritesButtonClick
//     // );
//     // document.addEventListener("click", this.onDocumentClick);
//   }
// }

// export default Favorites;

class Favorites {
  constructor() {
    this.favoriteOverlayElement = document.querySelector(
      "[data-js-favorites-overlay]"
    );
    this.favoritesButtonElement = document.querySelector(
      "[data-js-favorites-button]"
    );
    this.closeOverlayButtonElement = document.querySelector(
      "[data-js-close-overlay]"
    );

    this.bindEvents();
  }

  bindEvents() {
    this.favoritesButtonElement.addEventListener(
      "click",
      this.toggleFavoritesOverlay
    );
    this.closeOverlayButtonElement.addEventListener(
      "click",
      this.toggleFavoritesOverlay
    );

    // Добавляем обработчик клика на документ
    document.addEventListener("click", this.handleDocumentClick);
  }

  handleDocumentClick = (event) => {
    // Проверяем, был ли клик вне области окна избранного
    const isClickInsideOverlay = this.favoriteOverlayElement.contains(
      event.target
    );
    const isClickOnButton = this.favoritesButtonElement.contains(event.target);

    // Если клик был вне окна и не на кнопке, закрываем окно
    if (!isClickInsideOverlay && !isClickOnButton) {
      this.closeFavoritesOverlay();
    }
  };

  toggleFavoritesOverlay = () => {
    this.favoriteOverlayElement.classList.toggle("active");
    document.documentElement.classList.toggle("is-lock");
  };

  closeFavoritesOverlay() {
    this.favoriteOverlayElement.classList.remove("active");
    document.documentElement.classList.remove("is-lock");
  }
}

// Создаем экземпляр класса после загрузки DOM
// document.addEventListener("DOMContentLoaded", () => {});

export default Favorites;
