// class Header {
//   selectors = {
//     root: "[data-js-header]",
//     overlay: "[data-js-header-overlay]",
//     burgerButton: "[data-js-header-burger-button]",
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
//     this.burgerButtonElement = this.rootElement.querySelector(
//       this.selectors.burgerButton
//     );
//     this.bindEvents();
//   }

//   onBurgerButtonClick = () => {
//     this.burgerButtonElement.classList.toggle(this.stateClassis.isActive);
//     this.overlayElement.classList.toggle(this.stateClassis.isActive);
//     document.documentElement.classList.toggle(this.stateClassis.isLock);
//   };

//   bindEvents() {
//     this.burgerButtonElement.addEventListener(
//       "click",
//       this.onBurgerButtonClick
//     );
//   }
// }

class Header {
  selectors = {
    root: "[data-js-header]",
    overlay: "[data-js-header-overlay]",
    burgerButton: "[data-js-header-burger-button]",
  };

  stateClassis = {
    isActive: "active",
    isLock: "is-lock",
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.overlayElement = this.rootElement.querySelector(
      this.selectors.overlay
    );
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton
    );
    this.bindEvents();
  }

  onBurgerButtonClick = () => {
    this.toggleMenu();
  };

  onDocumentClick = (event) => {
    const isClickInsideMenu = this.rootElement.contains(event.target);
    const isBurgerButtonClicked = this.burgerButtonElement.contains(
      event.target
    );

    if (!isClickInsideMenu && !isBurgerButtonClicked) {
      this.closeMenu();
    }
  };

  toggleMenu() {
    const isActive = this.burgerButtonElement.classList.toggle(
      this.stateClassis.isActive
    );
    this.overlayElement.classList.toggle(this.stateClassis.isActive);
    document.documentElement.classList.toggle(
      this.stateClassis.isLock,
      isActive
    );
  }

  closeMenu() {
    this.burgerButtonElement.classList.remove(this.stateClassis.isActive);
    this.overlayElement.classList.remove(this.stateClassis.isActive);
    document.documentElement.classList.remove(this.stateClassis.isLock);
  }

  bindEvents() {
    this.burgerButtonElement.addEventListener(
      "click",
      this.onBurgerButtonClick
    );
    document.addEventListener("click", this.onDocumentClick);
  }
}

export default Header;
