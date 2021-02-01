// 把画图和给图形添加颜色两个功能分开

class Color {
  constructor(name) {
    this.name = name;
  }
}

class Shape {
  constructor(name,color) {
    this.name = name;
    this.color = color;
  }

  draw() {
    console.log(`画出${this.name}，颜色是${this.color.name}`);
  }
}

let red = new Color('red');
let green = new Color('green');

let circle1 = new Shape('圆形',red);
circle1.draw();

export {Color}
