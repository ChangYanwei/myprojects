class jQuery {
  constructor(selector) {
    let slice = Array.prototype.slice;
    let dom = slice.call(document.querySelectorAll(selector));
    let len = dom.length;
    for (let i = 0; i < len; i++) {
      this[i] = dom[i];
    }
    this.length = len;
    this.selector = selector || '';
  }

  append(node) {

  }

  addClass(name) {

  }

  html(data) {

  }
}

window.$ = function (selector) {
  //工厂模式
  return new jQuery(selector);
}

let $h = $('h1');
console.log($h);
console.log($h.addClass);
