window.qq = (selector, root = document) => {
  return {
    element: root.querySelector(selector),

    on(e, fn) {
      this.element.addEventListener(e, fn);
    },

    find(selector) {
      return qq(selector, this.element);
    },

    value() {
      return this.element.value;
    },

    html(content) {
      this.element.innerHTML = content;
    }
  }
}
