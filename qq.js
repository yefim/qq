window.qq = (selector, root = document) => {
  const _elements = root.querySelectorAll(selector);

  return {
    _elements,

    _first: _elements[0],

    length: _elements.length,

    each(fn) {
      for (let i = 0, len = this._elements.length; i < len; i++) {
        fn(this._elements[i], i);
      }
    },

    on(e, fn) {
      this.each((element) => {
        element.addEventListener(e, fn);
      });
    },

    find(selector) {
      return qq(selector, this._first);
    },

    value() {
      return this._first.value;
    },

    html(content) {
      if (content === undefined) {
        return this._first.innerHTML;
      } else {
        this._first.innerHTML = content;
        return this;
      }
    }
  }
}
