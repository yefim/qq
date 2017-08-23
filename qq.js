window.qq = (selector, root = document) => {
  const _elements = root.querySelectorAll(selector);
  const _first = _elements[0];

  return {
    length: _elements.length,

    each(fn) {
      for (let i = 0, len = _elements.length; i < len; i++) {
        fn(_elements[i], i);
      }
    },

    on(e, fn) {
      this.each((element) => {
        element.addEventListener(e, fn);
      });
    },

    find(selector) {
      return qq(selector, _first);
    },

    value() {
      return _first.value;
    },

    html(content) {
      if (content === undefined) {
        return _first.innerHTML;
      } else {
        _first.innerHTML = content;
        return this;
      }
    },

    data(key, content) {
      if (content === undefined) {
        return _first.dataset[key];
      } else {
        _first.dataset[key] = content;
        return this;
      }
    }
  }
}
