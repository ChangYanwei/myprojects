class Product {
  constructor(name) {
    this.name = name;
  }

  init() {
    console.log('init');
  }
}

class Creator {
  create(name) {
    return new Product(name);
  }
}

export {Product,Creator}
