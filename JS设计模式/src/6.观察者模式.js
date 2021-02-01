//主题：保存状态，状态改变之后触发所有的观察者对象
class Subject {
  constructor() {
    this.state = 0;
    this.observers = []
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
    this.notifyAllObservers();
  }

  notifyAllObservers() {
    this.observers.forEach(observer => {
      observer.update();
    })
  }

  //添加新的观察者
  attach(observer) {
    this.observers.push(observer)
  }
}

//观察者
class Observer {
  constructor(name,subject) {
    this.name = name;
    this.subject = subject;
    this.subject.attach(this);//初始化观察者的时候就将其加入主题中去
  }

  update() {
    console.log(`${this.name} update,state = ${this.subject.getState()}`);
  }
}

let subject = new Subject();
let o1 = new Observer('观察者1',subject);
let o2 = new Observer('观察者2',subject);
subject.setState(1);
subject.setState(2);

console.log(subject);

export {Observer}
