const rootSelectorExpandable = "[data-js-expandable-content]";

class ExpandableContent {
  selectors = {
    root: rootSelectorExpandable,
    buttonExpandable: "[data-js-expandable-content-info]",
  };

  stateClassis = {
    expanded: "expanded",
  };

  animation = {
    duration: 300,
    easing: "ease",
  };

  constructor(rootElement) {
    this.rootElement = rootElement;
    this.buttonExpandableElement = this.rootElement.querySelector(
      this.selectors.buttonExpandable
    );
    this.bindEventsExpandable();
  }

  expand() {
    const { offsetHeight, scrollHeight } = this.rootElement;

    this.rootElement.classList.add(this.stateClassis.expanded);
    this.rootElement.animate(
      [{ maxHeight: `${offsetHeight}px` }, { maxHeight: `${scrollHeight}px` }],
      this.animation
    );
  }

  onButtonClickExpandable = () => {
    this.expand();
  };

  bindEventsExpandable() {
    this.buttonExpandableElement.addEventListener(
      "click",
      this.onButtonClickExpandable
    );
  }
}

class ExpandableContentCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelectorExpandable).forEach((element) => {
      new ExpandableContent(element);
    });
  }
}

export default ExpandableContentCollection;
