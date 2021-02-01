// 把状态单独抽象出来
class State {
  constructor(color) {
    this.color = color;
  }

  // 切换状态
  handle(context) {
    console.log(`切换到${this.color}颜色`);
    context.setState(this); // this 是 State 的实例
  }
}

// 把主体抽象出来，主体中可以获取和设置状态
class Context {
  constructor() {
    this.state = null; // state 希望是 class State 的一个实例
  }

  // 获取状态
  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
  }
}

//测试
let context = new Context();
let red = new State('red');
let green = new State('green');

red.handle(context); // 切换状态
green.handle(context); // 切换状态
console.log(context.getState());

export {State}
