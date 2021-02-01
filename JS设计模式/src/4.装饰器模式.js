class Circle {
  draw() {
    console.log('画一个圆形');
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle;
  }

  draw() {
    this.circle.draw();
    this.setRedBorder();
  }

  setRedBorder() {
    console.log('设置红色边框');
  }
}

let c1 = new Circle();
c1.draw();

let c2 = new Decorator(c1);
c2.draw();
console.log(c1 === c2);

// import {readonly} from 'core-decorators'
// class Test {
//   @readonly
//   name() {
//     return 'hello'
//   }
// }
// let t1 = new Test();
// console.log(t1.name());


export {Circle}
